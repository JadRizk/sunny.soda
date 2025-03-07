import styled, { css } from 'styled-components';
import { Container, ContainerProps } from './Container';
import { Story } from '@storybook/react';
import { screens } from '../../theme/screens';

const StyledContainer = styled(Container)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.blue3};
  `};
`;

const ContainerContent = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 20px;
    height: 100%;
    background-color: ${colors.blue2};
    outline: 1px dashed ${colors.blue7};
    text-align: center;
    color: ${colors.baseContrast};
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
