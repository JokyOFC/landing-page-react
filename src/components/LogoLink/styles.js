import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    siplay: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 3rem;
    }
  `}
`;
