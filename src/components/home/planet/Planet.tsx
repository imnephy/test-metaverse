import { FC } from 'react';

import PlanetImg from '@/assets/images/planet.png';

import SemiCircle from './SemiCircle';
import WhiteLabel from './WhiteLabel';

interface PlanetProps {
  className: string;
  isLabel?: boolean;
}

const Planet: FC<PlanetProps> = ({ className, isLabel }) => {
  return (
    <div
      className={`
        w-[526px] 
        h-[526px]
        flex
        justify-center
        items-center
      bg-[#171719]
        rounded-full
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
            <img src={PlanetImg} alt="Planet" />
            <SemiCircle />
            {isLabel && <WhiteLabel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
