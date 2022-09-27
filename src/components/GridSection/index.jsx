import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridSection = ({
  title,
  description,
  text_grid,
  metadata,
  sectionId,
}) => {
  return (
    <SectionBackground background={metadata.background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!metadata.background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {text_grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!metadata.background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  text_grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  metadata: P.objectOf(
    P.shape({
      background: P.bool,
    }),
  ),
  sectionId: P.string,
};
