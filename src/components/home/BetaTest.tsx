import { useEffect, useRef, useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import getUsers from '@/API/getUsers';
import ParticipationTable from './ParticipationTable';

export type Users = {
  username: string;
  email: string;
  address: string;
};

const BetaTest = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const getUsersList = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getUsersList();
  }, []);

  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = (nameRef.current as HTMLInputElement).value;
    const email = (nameRef.current as HTMLInputElement).value;
  };

  return (
    <div className="grid grid-cols-12 pb-[333px] pt-[48px]">
      <div className="col-span-4">
        <div className="col-start-1 col-end-13 text-[36px] font-bold text-secondary">
          Beta test registration
        </div>
        <div className="col-start-1 col-end-5 mt-[18px] font-paragraphs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <form
          className="col-start-1 col-end-5 mt-[36px]"
          onSubmit={formHandler}
        >
          <Input
            inputRef={nameRef}
            required
            label="name"
            type="text"
            placeholder="We will display your name in participation list"
          />
          <Input
            className="mt-[18px]"
            inputRef={emailRef}
            required
            label="email"
            type="email"
            placeholder="We will display your name in participation list"
          />
          <Button className="mt-6" label="Get early access" />
        </form>
      </div>
      <ParticipationTable
        className="
          col-span-7 
          col-start-6 
          h-[668px] 
          w-full
          pr-7
          "
        users={users}
      />
    </div>
  );
};

export default BetaTest;
