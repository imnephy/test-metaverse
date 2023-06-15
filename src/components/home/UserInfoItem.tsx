import { FC } from 'react';

interface UserInfoItemProps {
  className?: string;
  title: string;
  description: string;
}

const UserInfoItem: FC<UserInfoItemProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={className}>
      <h2 className="mb-2 text-2xl">{title}</h2>
      <p className="text-[32px] text-secondary">{description}</p>
    </div>
  );
};

export default UserInfoItem;
