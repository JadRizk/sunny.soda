import styled, { css } from 'styled-components';
import { ThemeColor } from '../../theme';
import Flex from './Flex';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';
import { TypeH4 } from '../Typography/Typography';
import { Story } from '@storybook/react';

const Item = styled(Flex.Item)<{
  color?: ThemeColor;
  width?: number;
  height?: number;
}>`
  ${({ theme: { colors, spacings }, color, width, height }) => css`
    background: ${color ? colors[color] : colors.blue4};
    padding: ${spacings.spacing09};
    color: ${colors.baseContrast};
    text-align: center;
    border: 1px solid ${colors.baseContrast};
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : 'auto'};
  `};
`;

export const FlexRowLayout = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item />
    <Item filled />
    <Item />
    <Item />
  </Flex>
);

export const FlexColumnLayout = () => (
  <Flex column alignItems={'center'}>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Flex>
);

export const FlexWithFilledItem = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item filled />
  </Flex>
);

export const FlexNestedLayout = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item filled>
      <Flex alignItems={'center'}>
        <Item color={'blue1'} />
        <Item filled color={'blue1'} />
      </Flex>
    </Item>
  </Flex>
);

export const FlexSpacings = () => (
  <Flex alignItems={'center'} gap={{ default: 'spacing10' }} column>
    <Item width={400}>
      <TypeH4>Responsive</TypeH4>
      <Flex
        alignItems={'center'}
        gap={{
          default: 'spacing05',
          md: 'spacing03 spacing00',
          lg: 'spacing05 spacing08',
        }}
      >
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
      </Flex>
    </Item>
    <Item width={400}>
      <TypeH4>Same spacings for X & Y + same on all Screens</TypeH4>
      <Flex alignItems={'center'} gap={{ default: 'spacing04' }}>
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
      </Flex>
    </Item>
    <Item width={400}>
      <TypeH4>Different spacings for X and Y but same on all screens</TypeH4>
      <Flex alignItems={'center'} gap={{ default: 'spacing10 spacing04' }}>
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
        <Item filled color={'blue1'} />
      </Flex>
    </Item>
  </Flex>
);

FlexRowLayout.story = {
  name: 'Row layout',
};

FlexColumnLayout.story = {
  name: 'Column layout',
};

FlexWithFilledItem.story = {
  name: 'With filled item',
};

FlexNestedLayout.story = {
  name: 'With nested item',
};
FlexSpacings.story = {
  name: 'Spacings',
};
FlexSpacings.parameters = {
  controls: { hideNoControlsWarning: true },
};

export default {
  title: 'Layout/Flex',
  component: Flex,
  decorators: [
    (Story: Story) => (
      <StoryCenteredContainer>
        <Story />
      </StoryCenteredContainer>
    ),
  ],
};
