import { FC } from 'react';

import { User } from './BetaTest';
import UserInfoItem from './UserInfoItem';

interface UserInfoProps {
  className?: string;
  user: User;
  showWallet?: boolean;
}

const UserInfo: FC<UserInfoProps> = ({
  className,
  user,
  showWallet,
}) => {
  return (
    <div
      className={`
        [&>*:not(:first-child)]:mt-[22px] 
        ${className}
      `}
    >
      <UserInfoItem
        className="mb-[22px]"
        title="name"
        description={user.username}
      />
      <UserInfoItem title="email" description={user.email} />
      {showWallet && (
        <UserInfoItem title="wallet" description={user.address} />
      )}
    </div>
  );
};

export default UserInfo;
