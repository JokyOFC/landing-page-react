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

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      console.log('fetching');
      try {
        const dataF = await fetch(
          'http://localhost:1337/api/pages?filters[slug]=landing-page&populate=deep',
        );
        const json = await dataF.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        console.log(pageData[0]);
        console.log(`json: `);
        console.log(json);
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
  }, []);

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
