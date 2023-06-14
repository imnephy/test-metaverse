import { FC } from 'react';
import WalletConnection from './WalletConnection';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <div
        className="
          w-[200px] 
          h-[44px] 
          border 
          border-dashed 
          flex 
          justify-center 
          items-center 
          text-[18px] 
          font-normal
        bg-gray-300/50
        "
      >
        Logo
      </div>
      <WalletConnection />
    </header>
  );
};

export default Header;
