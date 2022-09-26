import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
