import React from 'react';
import Flex from '../components/Flex/Flex';
import { Container, ThemeScreen } from '../../index';

export const StoryCenteredContainer: React.FC<{
  wrapped?: boolean;
  maxWidth?: ThemeScreen;
}> = ({ children, maxWidth }) => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} fullHeight>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Flex>
  );
};
