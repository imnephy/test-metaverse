import { FC } from 'react';

interface TableItemProps {
  title: string;
}

const TableItem: FC<TableItemProps> = ({ title }) => {
  return (
    <span className="py-4 inline-block w-[80%]">
      <span className="block overflow-hidden text-ellipsis">
        {title}
      </span>
    </span>
  );
};

export default TableItem;
