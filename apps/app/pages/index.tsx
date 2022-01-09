import { Flex, TypeH1 } from '@sunny.soda/ui-shared';
import { FC } from 'react';
import { ConnectButton } from '../src/modules/api/user/components/ConnectButton';

const PageContent: FC = () => {
  return (
    <Flex column gap={{ default: 'spacing09' }}>
      <TypeH1>Welcome to the app!</TypeH1>
      <ConnectButton />
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
