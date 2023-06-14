import { useState } from 'react';
import Modal from './Modal';
import Button from './UI/Button';
import { useEthers } from '@usedapp/core';

const WalletConnection = () => {
  const [activeModal, setActiveModal] = useState(true);
  const { activateBrowserWallet, account } = useEthers();

  return (
    <>
      {!account && (
        <Button
          label="connect metamask"
          onClick={() => activateBrowserWallet()}
        />
      )}
      {account && (
        <div className="overflow-hidden w-[145px]">
          <p
            className="
            text-secondary
              text-[18px] 
              text-ellipsis 
              whitespace-nowrap 
              overflow-hidden
            "
          >
            {account}
          </p>
        </div>
      )}
      <Modal
        className="w-[422px] h-[295px] pt-[48px] pb-[43px] px-[50px] text-center"
        active={activeModal}
        setActive={setActiveModal}
        title="Metamask extension"
        body={
          <>
            To work with our application, you have to install the{' '}
            <span className="text-secondary">
              {' '}
              Metamask browser extension
            </span>
          </>
        }
        action={() => setActiveModal(false)}
        actionLabel="Skip this step"
      />
    </>
  );
};

export default WalletConnection;
