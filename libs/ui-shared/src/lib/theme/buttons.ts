import { fontSizes } from './fontSizes';
import { ThemeColor } from '.';
import { RemNumber } from '../utils/RemValue';

export type Buttons = {
  sizes: ButtonSizeStyles;
  appearances: ButtonAppearances;
  colors: ButtonColors;
};

export type ButtonAppearance = 'dashed' | 'filled' | 'outline' | 'ghost';

export type ButtonStyles = {
  color?: ThemeColor;
  bgColor?: ThemeColor;
  borderAppearance?: string;
  borderColor?: ThemeColor;
};

type ButtonAppearances = { [k in ButtonAppearance]: ButtonStyles };

const buttonAppearances: ButtonAppearances = {
  // Button appearances define what is not colored by the color.
  filled: {
    color: 'white',
    borderAppearance: '1px solid',
  },
  outline: {
    bgColor: 'white',
    borderAppearance: '1px solid',
  },
  ghost: {
    bgColor: 'transparent',
    borderAppearance: '1px solid',
    borderColor: 'transparent',
  },
  dashed: {
    bgColor: 'white',
    borderAppearance: '1px dashed',
  },
};

export type ButtonSize = 'small' | 'large';

type ButtonSizeStyle = {
  fontSize: string;
  paddingX: RemNumber;
  minHeight: RemNumber;
  iconSize: number;
};

type ButtonSizeStyles = { [key in ButtonSize]: ButtonSizeStyle };

export type ButtonColor = 'primary' | 'danger' | 'secondary';

export type ButtonStateVariant = 'initial' | 'hover' | 'active';

type ButtonColors = {
  [k in ButtonColor]: {
    [key in ButtonStateVariant]?: ThemeColor | ButtonStyles;
  };
};

const buttonColors: ButtonColors = {
  // button colors define what's being colored and in which state.
  // you can also pass button appearances (check "secondary" button)
  primary: {
    initial: 'yellow6',
    hover: 'yellow7',
    active: 'yellow9',
  },
  danger: {
    initial: 'red5',
    hover: 'red4',
    active: 'red6',
  },
  secondary: {
    initial: {
      color: 'sand9',
      bgColor: 'sand9',
      borderColor: 'sand5',
    },
    hover: {
      color: 'sand9',
      bgColor: 'sand10',
      borderColor: 'sand7',
    },
    active: 'sand10',
  },
};

const buttonSizeStyles: ButtonSizeStyles = {
  small: {
    fontSize: fontSizes.scale02,
    paddingX: '1.2rem',
    minHeight: '4rem',
    iconSize: 16,
  },
  large: {
    fontSize: fontSizes.scale03,
    paddingX: '1.6rem',
    minHeight: '4.8rem',
    iconSize: 20,
  },
};

export const buttons: Buttons = {
  sizes: { ...buttonSizeStyles },
  appearances: { ...buttonAppearances },
  colors: { ...buttonColors },
};
