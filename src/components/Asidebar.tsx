'use client';

import { useEffect, useState } from 'react';
import { Category, Subcategory, Dua } from '@/types';
import { getCategories, getDuas, getSubcategories } from '@/services/api';
import Image from 'next/image';
import AttackIcon from './svg/hArrow';
import CustomSearchIcon from './svg/searchIcon';

export default function ASidebar({
  onSelectSubcategory,
}: {
  onSelectSubcategory: (catId: number, subcatId: number, catName: string, subcatName: string) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Record<number, Subcategory[]>>({});
  const [duas, setDuas] = useState<Record<number, Dua[]>>({});
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());
  const [openSubcategories, setOpenSubcategories] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCategories().then(res => {
      const cats = res.data;
      setCategories(cats);

      if (cats.length > 0) {
        const firstCat = cats[0];
        setOpenCategories(new Set([firstCat.id]));

        getSubcategories(firstCat.id).then(res => {
          const subs = res.data;
          setSubcategories(prev => ({ ...prev, [firstCat.id]: subs }));

          if (subs.length > 0) {
            const firstSub = subs[0];
            setOpenSubcategories(new Set([firstSub.id]));

            getDuas(firstSub.id).then(res => {
              setDuas(prev => ({ ...prev, [firstSub.id]: res.data }));
              onSelectSubcategory(firstCat.id, firstSub.id, firstCat.cat_name_en, firstSub.subcat_name_en);
            });
          }
        });
      }
    });
  }, [onSelectSubcategory]);

  const handleCategoryToggle = (catId: number) => {
    setOpenCategories(prev => {
      const updated = new Set(prev);
      if (updated.has(catId)) {
        updated.delete(catId);
      } else {
        updated.add(catId);
      }
      return updated;
    });
  };

  const handleSubcategoryClick = (catId: number, subcatId: number, catName: string, subcatName: string) => {
    onSelectSubcategory(catId, subcatId, catName, subcatName);

    setOpenSubcategories(prev => {
      const updated = new Set(prev);
      if (!updated.has(subcatId)) {
        if (!duas[subcatId]) {
          getDuas(subcatId).then(res => {
            setDuas(prev => ({ ...prev, [subcatId]: res.data }));
          });
        }
        updated.add(subcatId);
      } else {
        updated.delete(subcatId);
      }
      return updated;
    });
  };

  const filteredCategories = categories.filter(cat =>
    cat.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 bg-bg-white shadow p-4 space-y-4 overflow-y-auto h-screen">
      <div className="relative text-sm">
        <input
          type="text"
          placeholder="Search by Dua Categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 rounded-full bg-[#E1EBE166] placeholder:text-[#7C827D] placeholder:pl-4 text-[#282E29] focus:outline-none"
        />
        <CustomSearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#709484]" />
      </div>

      {filteredCategories.map((cat) => {
        const subcatCount = subcategories[cat.id]?.length || 0;
        const duaCount = (subcategories[cat.id] || []).reduce((total, sub) => {
          return total + (duas[sub.id]?.length || 0);
        }, 0);

        return (
          <div key={cat.id} className="text-[#282E29]">
            <button
              onClick={() => handleCategoryToggle(cat.id)}
              className="font-medium text-left w-full hover:bg-[#E1EBE1] py-3 px-2.5 rounded-lg text-sm"
            >
              <Image src="/images/icon.png" alt={cat.cat_name_en} width={24} height={24} className="inline-block mr-2" />
              {cat.cat_name_en}
              <p className="text-xs text-[#709484] ml-5">
                {subcatCount} subcategories, {duaCount} duas
              </p>
            </button>

            {openCategories.has(cat.id) && (
              <div className="ml-3 py-3.5 px-2.5 gap-1 text-sm">
                {subcategories[cat.id]?.map((sub) => (
                  <div key={sub.id} className="mb-2">
                    <button
                      onClick={() => handleSubcategoryClick(cat.id, sub.id, cat.cat_name_en, sub.subcat_name_en)}
                      className="block text-left w-full"
                    >
                      {sub.subcat_name_en}
                    </button>

                    {openSubcategories.has(sub.id) && (
                      <ul className="ml-3 list-disc text-sm">
                        {duas[sub.id]?.map((dua) => (
                          <div key={dua.id} className="flex items-start space-x-2 mb-1">
                            <AttackIcon />
                            <a href={`#dua-${dua.id}`} className="">
                              {dua.dua_name_en}
                            </a>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
