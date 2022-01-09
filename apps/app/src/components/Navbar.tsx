import React from 'react';
import Link from 'next/link';
import { Flex, TypeH1 } from '@sunny.soda/ui-shared';

export const Navbar: React.FC = ({ children }) => {
  return (
    <Flex
      as={'nav'}
      fullWidth
      alignItems={'center'}
      justifyContent={'start'}
      gap={{ default: 'spacing04' }}
    >
      <Link href={'/'} passHref>
        <a aria-label={'sunny.soda'}>
          <TypeH1>Sunny.Soda</TypeH1>
        </a>
      </Link>

      {children}
    </Flex>
  );
};
