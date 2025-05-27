// types/index.ts

export interface Category {
  id: number;
  cat_id: number;
  cat_name_en: string;
  cat_icon: string;
  no_of_dua: number;
  no_of_subcat: number;
}

export interface Subcategory {
  id: number;
  subcat_id: number;
  cat_id: number;
  subcat_name_en: string;
  no_of_dua: number;
}

export interface Dua {
  id: number;
  dua_id: number;
  subcat_id: number;
  dua_name_en: string;
  top_en?: string;
  dua_arabic: string;
  transliteration_en?: string;
  translation_en: string;
  refference_en?: string;
  audio?: string;
}
