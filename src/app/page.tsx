'use client';

import { useState } from 'react';
import ASidebar from "@/components/Asidebar";
import FontSettings from "@/components/Fontsetting";
import Navbar from "@/components/Navbar";
import DuaList from '@/components/DuaCard';

export default function Home() {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<number | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState<string | null>(null);
 
  const handleSubcategorySelect = (
    catId: number,
    subcatId: number,
    catName: string,
    subcatName: string
  ) => {
    setSelectedSubcategoryId(subcatId);
    // setSelectedCategoryId(catId); // Removed unused state
    setSelectedCategoryName(catName);
    setSelectedSubcategoryName(subcatName);
  };

  return (
    <div className="ml-16">
      <Navbar />
      <main className=" bg-white grid grid-cols-[280px_1fr_280px] max-w-[1708px] mx-auto gap-12 overflow-y-auto">
        {/* Left Sidebar */}
        <div className="h-screen overflow-y-auto">
          <ASidebar onSelectSubcategory={handleSubcategorySelect} />
        </div>

        {/* Main Content */}
        <div className="h-screen hidden lg:block">
          {selectedSubcategoryId ? (
            <DuaList
              subcategoryId={selectedSubcategoryId}
              categoryName={selectedCategoryName ?? ""}
              subcategoryName={selectedSubcategoryName ?? ""}
            />
          ) : (
            <p>Select a subcategory to view Duas.</p>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="h-screen overflow-y-auto hidden lg:block">
          <FontSettings />
        </div>
      </main>
    </div>
  );
}
