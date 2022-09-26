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

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        console.log(component);
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          // eslint-disable-next-line react/jsx-key
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          // eslint-disable-next-line react/jsx-key
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
