import { RemNumber } from '../utils/RemValue';
import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { spacings } from './spacings';

export type InputState = 'initial' | 'active';
type InputSize = 'small' | 'large';
type InputStyle = 'default';

type InputSizeStyle = {
  minHeight: RemNumber;
  fontSize: string;
  borderRadius: string;
  paddingX: string;
  iconSize: number;
};

type InputStyleState = {
  color: string;
  bgColor: string;
  borderWidth: string;
  borderColor: string;
  shadow?: string;
};

type InputStyleStates = { [key in InputState]: InputStyleState };

type InputStyleStyles = { [key in InputStyle]: InputStyleStates };

type InputsSizeStyles = { [key in InputSize]: InputSizeStyle };

const inputsSizes: InputsSizeStyles = {
  small: {
    minHeight: '4.8rem',
    fontSize: fontSizes.scale02,
    borderRadius: '0.4rem',
    paddingX: spacings.spacing04,
    iconSize: 16,
  },
  large: {
    minHeight: '5.2rem',
    fontSize: fontSizes.scale03,
    borderRadius: '0.8rem',
    paddingX: spacings.spacing05,
    iconSize: 20,
  },
};

const inputStyles: InputStyleStyles = {
  default: {
    initial: {
      color: colors.shade10,
      bgColor: colors.shade1,
      borderWidth: '0px',
      borderColor: 'transparent',
      shadow: 'none',
    },
    active: {
      color: colors.shade10,
      bgColor: colors.white,
      borderWidth: '0px',
      borderColor: 'transparent',
      shadow:
        '0px 1px 10px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    },
  },
};

export type Inputs = {
  size: InputsSizeStyles;
  style: InputStyleStyles;
};

export const inputs: Inputs = {
  size: {
    ...inputsSizes,
  },
  style: {
    ...inputStyles,
  },
};
