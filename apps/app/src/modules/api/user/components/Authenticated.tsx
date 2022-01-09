import { TypeH1 } from '@sunny.soda/ui-shared';
import React from 'react';
import { useEthers } from '@usedapp/core';

type AuthenticatedProps = {
  children: React.FC<{ account: string }> | React.ReactNode;
};

export const Authenticated: React.FC<AuthenticatedProps> = ({ children }) => {
  const { account } = useEthers();

  if (!account) return <TypeH1>You do not have access to this page!</TypeH1>;

  return (
    <>{typeof children === 'function' ? children({ account }) : children}</>
  );
};
