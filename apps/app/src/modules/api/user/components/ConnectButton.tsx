import { FC } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

export const ConnectButton: FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const userBalance = useEtherBalance(account);

  return (
    <div>
      {!account && (
        <button onClick={() => activateBrowserWallet()}> Connect </button>
      )}
      {account && <button onClick={deactivate}> Disconnect </button>}
      {account && <p>Account: {account}</p>}
      {userBalance && <p>Ether balance: {formatEther(userBalance)} ETH </p>}
    </div>
  );
};
