import { Flex, TypeH1 } from '@sunny.soda/ui-shared';
import { FC } from 'react';
import { Authenticated } from '../src/modules/api/user/components/Authenticated';

const PageContent: FC = () => {
  return (
    <Flex column gap={{ default: 'spacing09' }}>
      <TypeH1>Welcome to the app!</TypeH1>
    </Flex>
  );
};

export function Index() {
  return (
    <Authenticated>
      <PageContent />
    </Authenticated>
  );
}

export default Index;
