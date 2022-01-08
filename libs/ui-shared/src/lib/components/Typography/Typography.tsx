import { ThemeColor } from '../../theme';
import styled, { css } from 'styled-components';
import { media } from '../../utils/mediaQueryUtils';

export type TypeProps = {
  color?: ThemeColor;
};

export const TypeH1 = styled.h1<TypeProps>`
  ${({ theme: { fontSizes, colors, lineHeights }, color }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.tight};
    font-weight: 600;
    font-size: ${fontSizes.scale05};

    ${media.minQueries.sm`
        font-size: ${fontSizes.scale06};
    `}
  `}
`;

export const TypeH2 = styled.h2<TypeProps>`
  ${({ theme: { fontSizes, colors, lineHeights }, color }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.tight};
    font-weight: 600;
    font-size: ${fontSizes.scale05};
  `}
`;

export const TypeH3 = styled.h3<TypeProps>`
  ${({ theme: { fontSizes, colors, lineHeights }, color }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.normal};
    font-weight: 600;
    font-size: ${fontSizes.scale04};
  `}
`;

export const TypeH4 = styled.h4<TypeProps>`
  ${({ theme: { fontSizes, colors, lineHeights }, color }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.normal};
    font-weight: 600;
    font-size: ${fontSizes.scale03};
  `}
`;

export const TypeH5 = styled.h5<TypeProps>`
  ${({ theme: { fontSizes, colors, lineHeights }, color }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.normal};
    font-weight: 500;
    font-size: ${fontSizes.scale02};
  `}
`;

export const BodyText = styled.p<TypeProps & { fontWeight?: 400 | 500 | 600 }>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    fontWeight = 400,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.normal};
    font-size: ${fontSizes.scale03};
    font-weight: ${fontWeight};
  `}
`;

export const SmallBodyText = styled.p<
  TypeProps & { fontWeight?: 400 | 500 | 600 }
>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    fontWeight = 400,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    line-height: ${lineHeights.normal};
    font-size: ${fontSizes.scale02};
    font-weight: ${fontWeight};
  `}
`;
