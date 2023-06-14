import React, { FC } from 'react';
import { Users } from './BetaTest';

interface ParticipationTableProps {
  className: string;
  users: Users[];
}

const ParticipationTable: FC<ParticipationTableProps> = ({
  className,
  users,
}) => {
  return (
    <div className={className}>
      <h2 className="text-4xl">
        Participation listing (enable only for participants)
      </h2>
      <table className="w-full mt-9">
        <thead className="w-[94%]">
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
            max-h-[380px] 
            overflow-y-scroll 
            pr-[30px]
            font-paragraphs 
            text-sm

            scrollable-tbody
          "
        >
          {users.map((user, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <span className="block py-4">
                      {user.username}
                    </span>
                  </td>
                  <td>
                    <span className="inline-block w-[195px]">
                      <span className="block overflow-hidden text-ellipsis">
                        {user.email}
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="inline-block w-[195px]">
                      <span className="block overflow-hidden text-ellipsis">
                        {user.address}
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <hr />
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipationTable;
