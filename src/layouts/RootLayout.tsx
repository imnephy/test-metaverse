import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const RootLayout = () => {
  return (
    <div
      className="
        h-full
        max-w-[1312px] 
        m-auto
        flex 
        flex-col
        text-white
      "
    >
      <Header
        className="
          h-[72px] 
          pt-[14px]
          flex
          justify-between
          items-center
        "
      />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
