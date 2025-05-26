import React from 'react';
import CustomArrowIcon from './svg/arrowDown';
import SuccessIcon from './svg/successIcon';
import CustomSupportIcon from './svg/colorWatchIcon';
import RightIcon from './svg/arrowrRight';
import CapIcon from './svg/smallCap';
import ArrowUpIcon from './svg/arrowUp';

const FontSettings: React.FC = () => {
  return (
    <div className="pt-3.5 space-y-2.5  w-full">
      <h2 className="flex items-center text-emerald-700 font-semibold text-sm py-2.5">
        <span className="bg-[#D8E7D3] p-2 rounded-full mr-2">
          <i className="text-[#417360]"><CapIcon/></i>
        </span>
        Font Settings
        <ArrowUpIcon  className="ml-auto text-[#417360]" />
      </h2>

      <div className="space-y-4 py-2.5">
        {/* Arabic Font Size */}
        <div className='px-2 space-y-3'>
          <label className="text-sm text-[#282E29] font-medium">Arabic Font Size</label>
          <div className="flex items-center">
            <input
              type="range"
              min="16"
              max="40"
              value="28"
              className="w-full h-[3px] accent-[#417360]"
            />
            <span className="text-sm text-[#282E29] ml-2 font-medium">28</span>
          </div>
        </div>

        {/* Translation Font Size */}
        <div className='px-2 space-y-3 py-2.5'>
          <label className="text-sm text-[#282E29] font-medium">Translation Font Size</label>
          <div className="flex items-center">
            <input
              type="range"
              min="16"
              max="40"
              value="28"
              className="w-full h-[3px] accent-[#417360]"
            />
            <span className="text-sm text-[#282E29] ml-2 font-medium">28</span>
          </div>
        </div>

        {/* Arabic Script & Font Face */}
        <div className='px-2 space-y-2.5'>
          <label className="text-sm text-[#282E29] font-medium">Arabic Script & Font Face</label>
          <button className="flex items-center justify-between w-full bg-[#EEF6EB] p-2 rounded-md">
            <span className="text-sm text-[#282E29]">Uthma</span>
            <RightIcon  className="ml-auto text-emerald-700" />
          </button>
        </div>
      </div>

      {/* Other Settings */}
      <div className="space-y-4">
        <div className="flex items-center text-[#282E29] text-sm font-medium py-2.5 space-x-4">
          <span className="bg-[#D8E7D3] p-2 rounded-full mr-2"><SuccessIcon/></span>
          View Settings
          <CustomArrowIcon  className="ml-auto text-emerald-700" />
        </div>
        <div className="flex items-center text-[#282E29] text-sm font-medium py-2.5 space-x-4">
          <span className="bg-[#D8E7D3] p-2 rounded-full mr-2"><CustomSupportIcon/></span>
          Appearance Settings
          <CustomArrowIcon  className="ml-auto text-emerald-700" />
        </div>
      </div>
    </div>
  );
};

export default FontSettings;
