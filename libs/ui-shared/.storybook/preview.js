import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { theme } from '../src/index';
import { GlobalStyle } from '../src/lib/components/GlobalStyle';
import { bodyFontURL, headerFontURL } from '../src/lib/theme';

const StorybookGlobalStyle = createGlobalStyle`
  ${() => css`
    @import url(${headerFontURL});
    @import url(${bodyFontURL});
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
