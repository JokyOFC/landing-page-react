import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 5rem solid ${theme.colors.white};
    border-bottom: 5rem solid ${theme.colors.white};

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }

    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
