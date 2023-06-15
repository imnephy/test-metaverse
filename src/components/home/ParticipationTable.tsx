import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

import { User } from './BetaTest';

import TableItem from './TableItem';

interface ParticipationTableProps {
  className: string;
  users: User[];
  currentUser: User;
  showUser: boolean;
  delistUserHandler: () => void;
}

const ParticipationTable: FC<ParticipationTableProps> = ({
  className,
  users,
  currentUser,
  showUser,
  delistUserHandler,
}) => {
  return (
    <div className={className}>
      <h2 className="text-4xl">
        Participation listing (enable only for participants)
      </h2>
      <table className="w-full mt-9">
        <thead className="w-[95.5%]">
          <tr className="text-left text-2xl">
            <th>Name</th>
            <th>Email</th>
            <th>Wallet</th>
          </tr>
          <tr>
            <td colSpan={3}>
              <hr className="mt-4" />
            </td>
          </tr>
        </thead>
        <tbody
          className="
            block
            w-full 
            h-[630px] 
            pr-[30px]
            font-paragraphs 
            text-sm
            overflow-y-scroll 
            scrollable-tbody
          "
        >
          {/* show current user in the table */}
          {currentUser && showUser && (
            <ParticipationTableRow
              user={currentUser}
              isCurrent
              delistCurrUserHandler={delistUserHandler}
            />
          )}
          {/* other users */}
          {users.map((user, index) => {
            return (
              <React.Fragment key={index}>
                <ParticipationTableRow user={user} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ParticipationTableRow = ({
  user,
  isCurrent,
  delistCurrUserHandler,
}: {
  user: User;
  isCurrent?: boolean;
  delistCurrUserHandler?: () => void;
}) => {
  const navigate = useNavigate();

  const participantHandler = () => {
    if (isCurrent) {
      return;
    }
    navigate(`/users/${user.id}`);
  };

  return (
    <>
      <tr
        className={`${
          isCurrent ? 'text-secondary' : 'cursor-pointer'
        }`}
        onClick={participantHandler}
      >
        <td>
          <TableItem title={user.username} />
        </td>
        <td>
          <TableItem title={user.email} />
        </td>
        <td>
          <TableItem title={user.address} />
          {isCurrent && (
            <span
              className="inline-block pb-1 pl-8 text-white cursor-pointer"
              onClick={delistCurrUserHandler}
            >
              <IoMdClose size={14} />
            </span>
          )}
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <hr />
        </td>
      </tr>
    </>
  );
};

export default ParticipationTable;
