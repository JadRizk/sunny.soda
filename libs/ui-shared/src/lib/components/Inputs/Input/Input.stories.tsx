import { Story } from '@storybook/react';
import { StoryCenteredContainer } from '../../../storybookUtils/StoryCenteredContainer';
import { Input, InputProps } from './Input';
import { IconsContent } from '../../Icon/Icon';

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    prefix: {
      type: 'add',
      options: [...Object.keys(IconsContent), undefined],
    },
    suffix: {
      type: 'add',
      options: [...Object.keys(IconsContent), undefined],
    },
  },
};

const Template: Story<InputProps> = (args) => (
  <StoryCenteredContainer>
    <Input {...args} />
  </StoryCenteredContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'default-input',
  placeholder: 'This is an Input',
  inputSize: 'small',
  disabled: false,
  readOnly: false,
};
