import { FC } from 'react';

import PlanetImg from '@/assets/planet.png';

interface PlanetProps {
  className: string;
}

const Planet: FC<PlanetProps> = ({ className }) => {
  return (
    <div
      className={`
      bg-[#171719]
        rounded-full
        flex
        justify-center
        items-center
        ${className}
      `}
    >
      <div
        className="
          w-[446px] 
          h-[446px]
        bg-[#1E1E20]
          flex
          justify-center
          items-center 
          rounded-full
        "
      >
        <div
          className="
            w-[384px] 
            h-[384px]
            border 
          border-[#323232]
            flex
            justify-center
            items-center 
            rounded-full
          "
        >
          <div
            className="
              flex
              justify-center
              items-center 
              rounded-full 
              w-[370px] 
              h-[370px] 
              border 
            border-[#323232]
            "
          >
            <img src={PlanetImg} alt="Planet" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
