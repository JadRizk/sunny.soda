import styled, { css } from 'styled-components';
import { Container, ContainerProps } from './Container';
import { Meta, Story } from '@storybook/react';
import { screens } from '../../theme/screens';

const StyledContainer = styled(Container)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.sand3};
  `};
`;

const ContainerContent = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 20px;
    height: 100%;
    background-color: ${colors.sand5};
    outline: 1px dashed ${colors.sand8};
    text-align: center;
    color: ${colors.sand8};
  `};
`;

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      type: 'select',
      options: [undefined, ...Object.keys(screens)], // undefined makes the Container size fluid
    },
    fullHeight: {
      type: 'boolean',
    },
  },
};

const Template: Story<ContainerProps> = (args) => (
  <StyledContainer {...args}>
    <ContainerContent>You find the container content here.</ContainerContent>
  </StyledContainer>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { include: ['maxWidth', 'fullHeight'] },
};
