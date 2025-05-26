'use client';

import React from 'react';
import HomeIcon from './svg/homeIcon';
import CategoryIcon from './svg/categoryIcon';
import LampIcon from './svg/lampIcon';
import BookIcon from './svg/bookIcon';
import HospitalIcon from './svg/hospitalIcon';
import CupIcon from './svg/cupIcon';
import ArchiveMinusIcon from './svg/archive-minusIcon';
import MenuIcon from './svg/menuIcon';
import PrayerIcon from './svg/prayerIcon';
const LeftSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[68px] bg-[#EEF6EB] flex flex-col items-center py-4 space-y-4">
      
      {/* Top Main Icon */}
      <button className="w-10 h-10 bg-[#417360]  mx-3 text-white rounded-lg flex items-center justify-center">
        <PrayerIcon/> 
      </button>

      {/* Middle Icons */}
      <div className="flex flex-col items-center space-y-6 pt-36  px-3.5">
        <button className="w-10 h-10 bg-[#D8E7D3] p-2 rounded-lg flex items-center justify-center">
          <HomeIcon/> 
        </button>

        <CategoryIcon/>
        <LampIcon/>
        <ArchiveMinusIcon />
        <HospitalIcon/>
        <BookIcon/>
      </div>
 
      {/* Bottom Icons */}
      <div className="flex flex-col items-center mt-auto space-y-6 pb-3 px-3.5">
         
        <CupIcon/>
        <MenuIcon/>
      </div>
    </aside>
  );
};

export default LeftSidebar;
