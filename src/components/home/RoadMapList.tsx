import { FC } from 'react';

interface RoadMapListItemProps {
  isLast?: boolean;
}

const RoadMapList = () => {
  return (
    <>
      <h2 className="font-bold text-[32px] tracking-wide text-center">
        Roadmap stats
      </h2>
      <ul className="mt-[42px] last:border-b-0">
        <RoadMapListItem />
        <RoadMapListItem />
        <RoadMapListItem isLast />
      </ul>
    </>
  );
};

const RoadMapListItem: FC<RoadMapListItemProps> = ({ isLast }) => {
  return (
    <li
      className="
        flex 
        flex-col 
        items-center 
      "
    >
      <p
        className="
          text-[28px]
          font-bold
        text-secondary
          tracking-[1px]
        "
      >
        12,345
      </p>
      <p className="mt-3 text-lg">Lorem ipsum dolor</p>
      {!isLast && (
        <div
          className="w-full h-[0.5px] bg-[#D2C4C4] my-4"
          style={{ boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)' }}
        />
      )}
    </li>
  );
};

export default RoadMapList;
