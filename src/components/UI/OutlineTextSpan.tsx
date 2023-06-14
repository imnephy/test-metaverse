import { FC, PropsWithChildren } from 'react';

const OutlineTextSpan: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="inline-block relative">
      <span className="bordered-text">{children}</span>
      <span className="absolute inset-0 text-black">{children}</span>
    </div>
  );
};

export default OutlineTextSpan;
