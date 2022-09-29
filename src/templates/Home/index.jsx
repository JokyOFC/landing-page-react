import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { mockBase } from '../Base/stories';
import { Base } from '../Base';
import { useEffect, useState, useRef } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';

import { useLocation } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const isMounted = useRef(true);

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    console.log(location.pathname);
    const slug = pathname ? pathname : 'landing-page';
    console.log(slug);

    const load = async () => {
      console.log('fetching');
      try {
        const dataF = await fetch(
          `https://strapi-test-landing.herokuapp.com/api/pages?filters[slug]=${slug}&populate=deep`,
        );
        const json = await dataF.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (err) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location.pathname]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;

  const { text, link, srcImg, links } = menu;

  console.log(data);

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component, __component } = section;
        const key = `${slug}-${index}`;
        // console.log(section);

        if (
          __component === 'section.section-two-columns' ||
          component === 'section.section-two-columns'
        ) {
          //console.log({ ...section });
          return <GridTwoColumn key={key} {...section} />;
        }

        if (
          __component === 'section.section-grid' ||
          component === 'section.section-grid'
        ) {
          console.log({ ...section });
          return <GridSection key={key} {...section} />;
        }

        if (
          __component === 'section.section-grid-text' ||
          component === 'section.section-grid-text'
        ) {
          //console.log({ ...section });
          return <GridContent key={key} {...section} />;
        }
        // console.log({ ...section });
        // console.log({ __component });
        if (
          __component === 'section.section-grid-image' ||
          component === 'section.section-grid-image'
        ) {
          //console.log({ ...section });

          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
