import {
  TypeH1,
  TypeH2,
  TypeH3,
  TypeH4,
  BodyText,
  SmallBodyText,
  TypeProps,
} from './Typography';
import { Meta, Story } from '@storybook/react';
import { colors } from '../../theme/colors';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';

export const All: Story<TypeProps> = (props) => (
  <StoryCenteredContainer>
    <TypeH1 {...props}>This is not an H1</TypeH1>
    <TypeH2 {...props}>This is not an H2</TypeH2>
    <TypeH3 {...props}>This is not an H3</TypeH3>
    <TypeH4 {...props}>This is not an H4</TypeH4>
    <BodyText {...props}>This is not a body text</BodyText>
    <SmallBodyText {...props}>This is not a small body text</SmallBodyText>
  </StoryCenteredContainer>
);

export default {
  title: 'Typography',
  argTypes: {
    color: {
      type: 'select',
      options: Object.keys(colors),
    },
  },
};
