import { Story, Meta } from '@storybook/react';
import { IconProps, Icon, IconsContent, IconName } from './Icon';
import { colors } from '../../theme/colors';
import styled, { css } from 'styled-components';

export default {
  component: Icon,
  title: 'Icon',
  argTypes: {
    color: {
      type: 'select',
      options: Object.keys(colors),
    },
    name: {
      type: 'select',
      options: Object.keys(IconsContent),
    },
    size: {
      type: 'select',
      options: [16, 24, 32, 48, 64],
    },
  },
};

const Template: Story<IconProps> = ({ ref, ...rest }) => {
  return <Icon {...rest} />;
};

export const Single = Template.bind({});

Single.args = {
  name: 'add',
};

const iconList = Object.keys(IconsContent) as IconName[];

const Grid = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-template-columns: repeat(6, 1fr);
`;

const Flex = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    > * {
      flex: 0 0 auto;
      min-width: 0;
      width: auto;
      max-width: 100%;
      align-self: center;
    }
    > span {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      margin-top: 16px;
      color: ${colors.body};
    }
  `}
`;

export const All = () => {
  const renderAll = () =>
    iconList.map((icon, index) => (
      <div key={index}>
        <Flex>
          <div>
            <Icon name={icon} size={24} />
          </div>
          <span>{icon}</span>
        </Flex>
      </div>
    ));

  return <Grid>{renderAll()}</Grid>;
};
