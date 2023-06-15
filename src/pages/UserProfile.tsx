import { useGetUserQuery } from '@/API/userApi';
import { User } from '@/components/home/BetaTest';
import Planet from '@/components/home/planet/Planet';
import UserInfo from '@/components/home/UserInfo';
import { selectUser } from '@/slices/userSlice';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile: FC = () => {
  const { id } = useParams();

  // get user from store
  const currentUser: User | null = useSelector(selectUser);

  const navigate = useNavigate();

  // redirect to '/' if user not registered
  useEffect(() => {
    if (!currentUser) navigate('/');
  }, [currentUser, navigate]);

  const {
    data: user,
    error,
    isLoading,
  } = useGetUserQuery(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }

  if (user) {
    return (
      <div className="flex justify-between h-full">
        <div>
          <h2 className="mt-[96px] text-5xl font-bold ">
            Personal data
          </h2>
          <UserInfo className="mt-12" user={user} showWallet />
        </div>
        <Planet className="mr-[-256px] mt-9" />
      </div>
    );
  }
};

export default UserProfile;
