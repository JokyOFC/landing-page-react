import { screen, debug, render } from '@testing-library/react';
import { Children } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

test('renders learn react link', () => {});
