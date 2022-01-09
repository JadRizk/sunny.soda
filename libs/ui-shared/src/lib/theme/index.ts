import { colors, Colors } from './colors';
import { fontSizes, FontSizes } from './fontSizes';
import { lineHeights, LineHeight } from './lineHeight';
import { spacings, Spacings } from './spacings';
import { Screens, screens } from './screens';
import { Buttons, buttons } from './buttons';
import { inputs, Inputs } from './Input';
import { zIndices, ZIndices } from './zIndices';
import { fonts, Fonts } from './fonts';

export const headerFontURL = `https://fonts.googleapis.com/css2?family=Allan:wght@400;700&display=swap`;
export const bodyFontURL = `https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap`;

export interface Theme {
  buttons: Buttons;
  colors: Colors;
  fonts: Fonts;
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
  fonts,
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
