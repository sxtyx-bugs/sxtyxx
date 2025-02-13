import React from 'react';
import { BsHouseFill, BsBookmarkFill, BsCameraFill } from 'react-icons/bs';

const BottomNav: React.FC = () => {
  return (
    <div className="bg-[#2A2A2A] h-[60px] grid grid-cols-3">
      <button className="flex flex-col items-center justify-center text-[#00C853]">
        <BsHouseFill size={24} />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-white">
        <BsBookmarkFill size={24} />
        <span className="text-xs mt-1">Saved</span>
      </button>
      <button className="flex flex-col items-center justify-center text-white">
        <BsCameraFill size={24} />
        <span className="text-xs mt-1">Camera</span>
      </button>
    </div>
  );
}

export default BottomNav;