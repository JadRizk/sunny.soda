import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';
import { IconsContent } from '../Icon/Icon';
import { ButtonAppearance, ButtonColor, buttons } from '../../theme/buttons';
import styled from 'styled-components';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      type: 'select',
      options: Object.keys(buttons.sizes),
    },
    appearance: {
      type: 'select',
      options: Object.keys(buttons.appearances),
    },
    color: {
      type: 'select',
      options: Object.keys(buttons.colors),
    },
    isElevated: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    isLoading: {
      type: 'boolean',
    },
    iconLeft: {
      type: 'select',
      options: [undefined, ...Object.keys(IconsContent)],
    },
    iconRight: {
      type: 'select',
      options: [undefined, ...Object.keys(IconsContent)],
    },
  },
};

const Template: Story<ButtonProps> = (args) => (
  <StoryCenteredContainer>
    <Button {...args} />
  </StoryCenteredContainer>
);

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
  appearance: 'filled',
  color: 'primary',
  isElevated: false,
  disabled: false,
  isLoading: false,
};

const colorsList = Object.keys(buttons.colors) as ButtonColor[];
const appearanceList = Object.keys(buttons.appearances) as ButtonAppearance[];

const MarginDiv = styled.div`
  text-align: center;
  > * {
    margin: 16px;
  }
`;
const getAppearanceButtons = (appearance: ButtonAppearance) => () => {
  return (
    <MarginDiv>
      {colorsList.map((color) => (
        <Button key={color} appearance={appearance} color={color}>
          {appearance}-{color}
        </Button>
      ))}
    </MarginDiv>
  );
};

export const All = () => {
  return (
    <div>
      {appearanceList.map((a) => {
        return <div key={a}>{getAppearanceButtons(a)()}</div>;
      })}
    </div>
  );
};
