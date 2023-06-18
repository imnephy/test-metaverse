import useBetaTest from '@/hooks/useBetaTest';

import Button from '../UI/Button';
import ParticipationTable from './ParticipationTable';
import RegistrationForm from './RegistrationForm';
import UserInfo from './UserInfo';

export type User = {
  id: number;
  username: string;
  email: string;
  address: string;
};

const BetaTest = () => {
  const {
    user,
    showTableUser,
    data,
    formSubmitHandler,
    showUserHandler,
    delistUserHandler,
  } = useBetaTest();

  return (
    <div
      className="
        grid 
        grid-cols-12 
        pb-[333px] 
        pt-12
      "
    >
      <div className="col-span-4">
        <div
          className="
            col-start-1 
            col-end-13 
            text-4xl 
            font-bold 
            text-secondary
          "
        >
          Beta test registration
        </div>
        <div
          className="
            col-start-1 
            col-end-5 
            mt-[18px] 
            font-paragraphs
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        {!user ? (
          <RegistrationForm
            className="col-start-1 col-end-5 mt-9"
            onSubmit={formSubmitHandler}
          />
        ) : (
          <>
            <UserInfo
              className="col-start-1 col-end-5 mt-9"
              user={user}
            />
            <Button
              className="mt-7"
              label="List me to the table"
              onClick={showUserHandler}
            />
          </>
        )}
      </div>
      {user && data?.items && (
        <ParticipationTable
          className="
            col-span-7
            col-start-6 
            h-[668px] 
            w-full
            pr-7
          "
          showUser={showTableUser}
          currentUser={user}
          delistUserHandler={delistUserHandler}
          users={data.items}
        />
      )}
    </div>
  );
};

export default BetaTest;
