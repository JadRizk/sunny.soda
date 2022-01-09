import { FC } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { Button } from '@sunny.soda/ui-shared';

export const ConnectButton: FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const userBalance = useEtherBalance(account);

  return (
    <>
      {!account && (
        <Button onClick={() => activateBrowserWallet()}> Connect </Button>
      )}
      {account && <button onClick={deactivate}> Disconnect </button>}
    </>
  );
};
