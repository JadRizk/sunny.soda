import { render } from '@testing-library/react';
import { Container } from './Container';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
