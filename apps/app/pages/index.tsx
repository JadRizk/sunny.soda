import { BodyText, Flex } from '@sunny.soda/ui-shared';
import { FC } from 'react';

const PageContent: FC = () => {
  return (
    <Flex column gap={{ default: 'spacing04' }}>
      <BodyText>Kickass starter project 🚀</BodyText>
    </Flex>
  );
};

export function Index() {
  return (
    <>
      <PageContent />
    </>
  );
}

export default Index;
