import styled, { css } from 'styled-components';
import { Navbar } from './Navbar';
import React from 'react';
import { Container } from '@sunny.soda/ui-shared';

const StyledPageLayout = styled.div`
  ${({ theme: { spacings } }) => css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    padding: ${spacings.spacing10} 0;
    gap: ${spacings.spacing10};
    > main {
      flex: 1;
    }
  `}
`;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <StyledPageLayout>
      <Container maxWidth={'xxl'} as={'header'}>
        <Navbar />
      </Container>

      <Container maxWidth={'xxl'} as={'main'}>
        {children}
      </Container>
    </StyledPageLayout>
  );
};
