import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { theme } from '../src/index';
import { GlobalStyle } from '../src/lib/components/GlobalStyle';

const StorybookGlobalStyle = createGlobalStyle`
  ${() => css`
    @import url('https://rsms.me/inter/inter.css');
    #root {
      height: 100vh;
    }
  `}
`;

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookGlobalStyle />
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
