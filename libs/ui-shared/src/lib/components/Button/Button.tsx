import styled, { css, useTheme } from 'styled-components';
import React, { forwardRef, memo, Ref } from 'react';
import {
  ButtonStyles,
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
  ButtonStateVariant,
} from '../../theme/buttons';
import { Icon, IconName } from '../Icon/Icon';
import Flex from '../Flex/Flex';
import { theme, Theme } from '../../theme';

const StyledButton = styled.button<
  StyledButtonProps & {
    isIconOnly: boolean;
  }
>`
  ${({
    theme: { buttons, colors },
    size = 'small',
    color = 'primary',
    appearance = 'filled',
    isIconOnly,
    isElevated,
    disabled,
    isLoading,
  }) => {
    const buttonSize = buttons.sizes[size];
    const buttonAppearance = buttons.appearances[appearance];
    const buttonColor = buttons.colors[color];

    const getButtonVariantsStyle = () => {
      const getColorStyles = ({
        color: fontColor,
        bgColor,
        borderAppearance,
        borderColor,
      }: ButtonStyles) => `
        ${
          fontColor && `color: ${colors[fontColor]};fill: ${colors[fontColor]};`
        }
        ${bgColor && `background-color: ${colors[bgColor]};`}
        border: ${borderAppearance} ${colors[borderColor ?? 'transparent']};
      `;

      const getStyleForVariant = (key: ButtonStateVariant) => {
        const getColor = (attribute: keyof ButtonStyles) => {
          const colorValue =
            typeof buttonColor[key] === 'object'
              ? (buttonColor[key] as ButtonStyles)[attribute]
              : buttonColor[key];
          return buttonAppearance[attribute] ?? colorValue ?? 'transparent';
        };

        return {
          color: getColor('color'),
          bgColor: getColor('bgColor'),
          borderAppearance: getColor('borderAppearance'),
          borderColor: getColor('borderColor'),
        } as ButtonStyles;
      };

      return `
        ${getColorStyles(getStyleForVariant('initial'))}
        &:hover { ${getColorStyles(getStyleForVariant('hover'))} }
        &:active { ${getColorStyles(getStyleForVariant('active'))} }
        &:focus { outline: 0; }
      `;
    };

    return css`
      position: relative;
      cursor: pointer;
      font-weight: 600;
      border-radius: 10rem;
      transition-property: background, border, color, fill;
      transition-duration: 0.15s;
      transition-timing-function: cubic-bezier(0.64, 0, 0.35, 1);

      font-size: ${buttonSize.fontSize};
      min-height: ${buttonSize.minHeight};
      min-width: ${buttonSize.minHeight};

      ${isIconOnly ? `padding: 0;` : `padding: 0 ${buttonSize.paddingX};`};

      ${getButtonVariantsStyle()}

      ${isElevated &&
      `
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 4px 20px rgba(0, 0, 0, 0.1);
      `}

      ${disabled &&
      `
        cursor: default;
        pointer-events: none;
        color: ${colors.shade4};
        fill: ${colors.shade4};
        background: ${colors.purple4};
        border: 1px solid ${colors.shade8};
      `}

      ${isLoading &&
      `
        opacity: 0.6;
        cursor: default;
        pointer-events: none;
      `}
    `;
  }}
`;

type StyledButtonProps = {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  color?: ButtonColor;
  isElevated?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps;

const ButtonComp = (
  {
    children,
    isLoading,
    iconLeft,
    iconRight,
    size = 'small',
    ...rest
  }: ButtonProps,
  ref?: Ref<HTMLButtonElement>
) => {
  const isIconOnly = !!((iconLeft || iconRight) && !children);

  // TODO: useTheme from styled-components

  const renderContent = () => {
    const icon = iconLeft ?? iconRight;

    if (children) {
      return (
        <>
          {iconLeft && (
            <Icon name={iconLeft} size={theme.buttons.sizes[size].iconSize} />
          )}
          <Flex.Item>{children}</Flex.Item>
          {iconRight && (
            <Icon name={iconRight} size={theme.buttons.sizes[size].iconSize} />
          )}
        </>
      );
    }

    if (icon) {
      return <Icon name={icon} size={theme.buttons.sizes[size].iconSize} />;
    }

    return;
  };

  return (
    <StyledButton
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      size={size}
      {...rest}
      ref={ref}
    >
      <Flex
        noWrap
        fullWidth
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ default: 'spacing02' }}
      >
        {renderContent()}
      </Flex>
    </StyledButton>
  );
};

const ForwardRef = forwardRef(ButtonComp);
export const Button = memo(ForwardRef);
