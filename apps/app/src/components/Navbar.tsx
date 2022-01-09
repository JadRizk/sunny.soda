import React from 'react';
import Link from 'next/link';
import { Flex, TypeH1 } from '@sunny.soda/ui-shared';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ConnectButton } from '../modules/api/user/components/ConnectButton';

export const Navbar: React.FC = ({ children }) => {
  const { account } = useEthers();
  const userBalance = useEtherBalance(account);

  return (
    <Flex
      as={'nav'}
      fullWidth
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={{ default: 'spacing04' }}
    >
      <Link href={'/'} passHref>
        <a aria-label={'sunny.soda'}>
          <TypeH1>Sunny.Soda</TypeH1>
        </a>
      </Link>

      {children}

      <Flex gap={{ default: 'spacing02' }}>
        {!!account && userBalance && <div> {formatEther(userBalance)} ETH</div>}
        <ConnectButton />
      </Flex>
    </Flex>
  );
};
