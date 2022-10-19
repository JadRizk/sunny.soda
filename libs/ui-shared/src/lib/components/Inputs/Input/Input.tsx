import { FC, forwardRef, InputHTMLAttributes, memo, Ref } from 'react';
import { Theme, theme, ThemeInputSize, ThemeInputStyle } from '../../../theme';
import styled, { css } from 'styled-components';
import { Icon, IconName, IconsContent } from '../../Icon/Icon';
import { colors } from '../../../theme/colors';
import { InputState } from '../../../theme/Input';

export const StyledInput = styled.input<{
  inputStyle: ThemeInputStyle;
  inputSize: ThemeInputSize;
}>`
  ${({ theme: { inputs, colors }, inputSize, inputStyle }) => {
    const { paddingX, borderRadius } = inputs.size[inputSize];

    return css`
      transition-property: color, background-color, box-shadow;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      ${makeInputStyle(inputStyle, 'initial', inputs)};
      appearance: none;
      font-weight: 400;
      border-radius: ${borderRadius};
      padding: 0 ${paddingX};
      width: 100%;
      position: relative;

      &:active,
      &:focus {
        ${makeInputStyle(inputStyle, 'active', inputs)};
        outline: none;
      }

      &:read-only {
        pointer-events: none;
      }

      &:disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      ::placeholder {
        color: ${colors.shade5};
        font-weight: 400;
      }

      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }

      &[type='button'] {
        text-align: start;
        pointer-events: auto;
        cursor: pointer;
      }
    `;
  }}
`;

export const StyledTextInput = styled(StyledInput)<{
  inputStyle: ThemeInputStyle;
  inputSize: ThemeInputSize;
  hasPrefix: boolean;
  hasSuffix: boolean;
  autoFocus?: boolean;
}>`
  ${({ theme: { inputs }, inputSize, hasPrefix, hasSuffix }) => {
    const { paddingX, minHeight, iconSize } = inputs.size[inputSize];

    return css`
      min-height: ${minHeight};
      flex: 1;

      ${hasPrefix &&
      css`
        padding-left: calc(${paddingX} + (${paddingX} / 2) + ${iconSize}px);
      `};

      ${hasSuffix &&
      css`
        padding-right: calc(${paddingX} + (${paddingX} / 2) + ${iconSize}px);
      `};
    `;
  }}
`;

const PrefixSuffixContainer = styled.div<{
  inputSize: ThemeInputSize;
  isDisabled?: boolean;
}>`
  ${({ theme: { inputs }, inputSize, isDisabled }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${inputs.size[inputSize].borderRadius};
    padding: 0 ${inputs.size[inputSize].paddingX};
    pointer-events: none;

    > * {
      display: inline-flex;
    }

    svg {
      fill: ${colors.shade5};
    }

    ${isDisabled &&
    css`
      > svg {
        opacity: 0.4;
      }
    `}
  `};
`;

const PrefixSuffix = styled.span`
  ${({ theme: { fontSizes } }) => css`
    font-size: ${fontSizes.scale01};
    font-weight: 600;
  `};
`;

const renderPrefixSuffix = (
  value: string | IconName,
  iconSize: number,
  onClick?: () => void
) => {
  if (value in IconsContent) {
    const iconName = value as IconName;
    return (
      <Icon
        name={iconName}
        size={iconSize}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
      />
    );
  }
  return <PrefixSuffix>{value}</PrefixSuffix>;
};

type InputPrefixSuffixProps = {
  inputSize: ThemeInputSize;
  isDisabled?: boolean;
  prefix?: IconName;
  suffix?: IconName;
  onSuffixClick?: () => void;
  onPrefixClick?: () => void;
};

const InputPrefixSuffix: FC<InputPrefixSuffixProps> = ({
  inputSize,
  isDisabled,
  prefix,
  suffix,
  onSuffixClick,
  onPrefixClick,
}) => {
  return (
    <PrefixSuffixContainer inputSize={inputSize} isDisabled={isDisabled}>
      {prefix ? (
        renderPrefixSuffix(
          prefix,
          theme.inputs.size[inputSize].iconSize,
          onPrefixClick
        )
      ) : (
        // We need the empty span for proper distribution in a flex item
        <span />
      )}
      {suffix &&
        renderPrefixSuffix(
          suffix,
          theme.inputs.size[inputSize].iconSize,
          onSuffixClick
        )}
    </PrefixSuffixContainer>
  );
};

const makeInputStyle = (
  style: ThemeInputStyle,
  state: InputState,
  inputs: Theme['inputs']
) => {
  const inputStyle = inputs.style[style][state];
  return `
    color: ${inputStyle.color};
    background: ${inputStyle.bgColor};
    border: ${inputStyle.borderWidth} solid ${inputStyle.borderColor};
    ${inputStyle.shadow && `box-shadow: ${inputStyle.shadow};`};
  `;
};

type InputType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'hidden'
  | 'date';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'required' | 'min' | 'max' | 'maxLength' | 'minLength'
> & {
  type?: InputType;
  prefix?: IconName;
  suffix?: IconName;
  onSuffixClick?: () => void;
  onPrefixClick?: () => void;
  inputSize?: ThemeInputSize;
};

const StyledInputComponent = styled.div<{ isDisabled?: boolean }>`
  ${({ isDisabled }) => css`
    position: relative;
    ${!isDisabled &&
    css`
      &,
      * {
        pointer-events: none;
      }

      input,
      svg {
        pointer-events: all;
      }
    `}
  `}
`;

const InputComponent = (
  {
    type = 'text',
    name,
    prefix,
    suffix,
    disabled,
    inputSize = 'large',
    onSuffixClick,
    onPrefixClick,
    autoFocus,
    ...rest
  }: InputProps,
  ref?: Ref<HTMLInputElement>
) => {
  return (
    <StyledInputComponent isDisabled={disabled}>
      <InputPrefixSuffix
        inputSize={inputSize}
        isDisabled={disabled}
        prefix={prefix}
        suffix={suffix}
        onSuffixClick={onSuffixClick}
        onPrefixClick={onPrefixClick}
      />
      <StyledTextInput
        type={type}
        data-test={`input-${name}`}
        inputStyle={'default'}
        inputSize={inputSize}
        hasPrefix={!!prefix}
        hasSuffix={!!suffix}
        disabled={disabled}
        name={name}
        id={name}
        ref={ref}
        autoFocus={autoFocus}
        {...rest}
      />
    </StyledInputComponent>
  );
};

const ForwardRef = forwardRef(InputComponent);
export const Input = memo(ForwardRef);
