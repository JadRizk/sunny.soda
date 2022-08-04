import { colors, Colors } from './colors';
import { fontSizes, FontSizes } from './fontSizes';
import { lineHeights, LineHeight } from './lineHeight';
import { spacings, Spacings } from './spacings';
import { Screens, screens } from './screens';
import { Buttons, buttons } from './buttons';
import { inputs, Inputs } from './Input';
import { zIndices, ZIndices } from './zIndices';

export const fontURL = `https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`;

export interface Theme {
  buttons: Buttons;
  colors: Colors;
  fonts: { main: string };
  fontSizes: FontSizes;
  lineHeights: LineHeight;
  spacings: Spacings;
  zIndices: ZIndices;
  screens: Screens;
  inputs: Inputs;
}

export const theme: Theme = {
  buttons,
  colors,
  fonts: {
    main: "'Nunito', sans-serif, system-ui, -apple-system",
  },
  fontSizes,
  lineHeights,
  spacings,
  zIndices,
  screens,
  inputs,
};

export type ThemeSpacing = keyof Spacings;
export type ThemeColor = keyof Colors;
export type ThemeFontSize = keyof FontSizes;
export type ThemeLineHeight = keyof LineHeight;
export type ThemeScreen = keyof Screens;
export type ThemeInputSize = keyof Inputs['size'];
export type ThemeInputStyle = keyof Inputs['style'];
