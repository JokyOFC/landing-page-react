import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Textcomponent } from '.';

describe('<Textcomponent />', () => {
  it('should render a text', () => {
    renderTheme(<Textcomponent>Children</Textcomponent>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
