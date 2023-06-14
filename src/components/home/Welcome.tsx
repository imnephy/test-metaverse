import OutlineTextSpan from '../UI/OutlineTextSpan';
import Planet from './Planet';
import RoadMapList from './RoadMapList';

const Welcome = () => {
  return (
    <div className="grid grid-cols-12 mt-[188px] w-full relative pb-[60px]">
      <div className="col-span-10">
        <div className="relative">
          <div
            className="
          font-bold 
          text-[120px] 
          leading-[130px]
          relative
          z-10
        "
          >
            Explore your own planet in{' '}
            <OutlineTextSpan>our new</OutlineTextSpan> metaverse
          </div>
          <Planet
            className="
          absolute 
          z-0 
          top-[-50%] 
          right-0  
          w-[526px] 
          h-[526px]
        "
          />
        </div>
      </div>
      <div className="col-span-4 mt-[45px] font-[16px] font-paragraphs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className="absolute right-0 col-span-2 pt-1">
        <RoadMapList />
      </div>
    </div>
  );
};

export default Welcome;
