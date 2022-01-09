import { BodyText } from '@sunny.soda/ui-shared';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome app 👋
            </h1>
            <BodyText>Body text example</BodyText>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
