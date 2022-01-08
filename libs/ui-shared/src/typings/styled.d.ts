import 'styled-components';
import { Theme } from '../lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
