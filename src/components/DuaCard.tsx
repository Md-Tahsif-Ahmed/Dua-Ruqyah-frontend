"use client"

import { useEffect, useState } from "react"
import { getDuas } from "@/services/api"
import type { Dua } from "@/types"
import HomeIcon from "./svg/homeIcon"
import LampIcon from "./svg/lampIcon"
import BookIcon from "./svg/bookIcon"
import CalendarIcon from "./svg/calander"
import PlayIcon from "./svg/play"
import DotIcon from "./svg/dot"
import ArrowRightIcon from "./svg/arrowR"
import SettingsIcon from "./svg/setting"

export default function DuaList({
  subcategoryId,
  categoryName,
  subcategoryName,
}: {
  subcategoryId: number | null;
  categoryName: string;
  subcategoryName: string;
}) {
  const [duas, setDuas] = useState<Dua[]>([])

  useEffect(() => {
    if (subcategoryId) {
      getDuas(subcategoryId).then((res) => {
        const uniqueDuas = Array.from(new Map(res.data.map((dua: Dua) => [dua.id, dua])).values()) as Dua[]
        setDuas(uniqueDuas)
      })
    }
  }, [subcategoryId])

  if (!subcategoryId) return <p className="text-center text-gray-500">Please select a subcategory.</p>

  return (
    <div className=" min-h-screen">
          {/* Dynamic Breadcrumb Navigation */}
      <div className="bg-[#E1EBE1] px-16 py-3.5">
        <nav className="flex items-center space-x-1 text-xs text-[#7C827D]">
          <HomeIcon className="w-4 h-4" />
          <ArrowRightIcon className="w-3 h-3" />
          <span className="">{categoryName}</span>
          <ArrowRightIcon className="w-3 h-3" />
          <span className="text-gray-800">{subcategoryName}</span>
        </nav>
      </div>

      {/* Dynamic Section Header */}
      <div className="bg-[#EEF6EB] px-16 py-6 gap-2.5">
        <h1 className="font-semibold text-[#282E29]">
          <span className="text-[#417360] font-normal">Section:</span> {subcategoryName}
        </h1>
      </div>

      {/* Duas List */}
      <div className="px-12 space-y-4">
        {duas.map((dua, i) => (
 
        <div key={dua.id} className=" py-8 px-5">
            <div id={`dua-${dua.id}`} className="">
              {/* Dua Header */}
              <div className="flex items-center space-x-2">
                <SettingsIcon/>
                <div className="flex items-center font-semibold space-x-1 text-[#417360]">
                  <span className="text-sm ">{i + 1}.</span>
                  <h3 className="text-lg ">{dua.dua_name_en}</h3>
                </div>
            
              </div>

               
              {/* Dua Content */}
              <div className="p-6 space-y-6">
                {/* Top Description */}
                {dua.top_en && (
                  <div className="text-[#282E29] leading-relaxed whitespace-pre-line">{dua.top_en}</div>
                )}

                {/* Arabic Text */}
                <div className="text-right">
                  <p className="text-3xl font-arabic leading-loose text-[#282E29] p-4 rounded">
                    {dua.dua_arabic}
                  </p>
                </div>

                {/* Transliteration */}
                {dua.transliteration_en && (
                  <div className="text-[#7C827D] italic leading-relaxed">{dua.transliteration_en}</div>
                )}

                {/* Translation */}
                <div className="text-[#282E29]">
                  <h4 className="font-semibold mb-2">Translation</h4>
                  <p className="leading-relaxed ">{dua.translation_en}</p>
                </div>

                {/* Reference */}
                {dua.refference_en && (
                  <div className="flex items-center justify-between space-x-12">
                    <div>
                      <h4 className="text-sm  text-[#7C827D]">Reference</h4>
                      <p className="text-sm font-medium text-[#282E29]">{dua.refference_en}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <LampIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <BookIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <CalendarIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <PlayIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2">
                        <DotIcon className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
        
             
          </div>
        ))}
      </div>
    </div>
  )
}
