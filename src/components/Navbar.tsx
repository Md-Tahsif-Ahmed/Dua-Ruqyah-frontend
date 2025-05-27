'use client';
import CustomSearchIcon from './svg/searchIcon';
import CustomSupportIcon from './svg/colorWatchIcon';
import Image from 'next/image';
import CustomRightDirectionIcon from './svg/rightDirectionIcon';

export default function Navbar() {
  return (
    <nav className="bg-[#FBFFFB] shadow-sm w-full">
      <div className="container mx-auto px-6 py-2 lg:py-2.5 flex items-center justify-between border-b-1 border-b-[#E1EBE1]">
        
       {/* Left part */}   
        <div>
          <h1 className="text-lg font-semibold text-[#282E29]">Dua <span className='text-[#417360] font-normal'>& </span> Ruqyah</h1>
          <p className="text-xs text-[#282E29] font-medium">Hisnul Muslim</p>
        </div>

        {/* Right: Icons + Button */}
        <div className="lg:flex items-center space-x-4 hidden">
          <button className="p-2.5 rounded-full bg-[#E1EBE199]">
            <CustomSearchIcon/>
          </button>
          <button className="p-2.5 rounded-full bg-[#E1EBE199]">
            <CustomSupportIcon/>
          </button>

          {/* Language Dropdown */}
          <div className="p-2.5 rounded-full bg-[#E1EBE199] space-x-2 flex items-center">
            <Image  src={"/images/flag.png"} alt="Language Flag" width={24} height={18} className="inline-block mr-2 border-1 rounded-xs" />
          
          <select className="bg-transparent [#7C827D] text-[#7C827D] font-normal">
            <option className='text-[#282E29] text-sm'>En</option>
            <option className='text-[#282E29] text-sm'>Bn</option>
          </select>
          </div>

          {/* Support Us Button */}
          <button className="flex items-center space-x-2 bg-[#417360] text-[#FBFFFB] px-3.5 py-2.5 rounded-full text-sm font-medium">

            <span>Support Us</span> 
            <CustomRightDirectionIcon/>
          </button>
        </div>
      </div>
    </nav>
  );
}
