export interface Asbab {
  id: number;
  ayah: number;
  text: string;
}

export interface Asma {
  id: number;
  arab: string;
  latin: string;
  indo: string;
}

export interface Ayah {
  id: number;
  surah: number;
  ayah: number;
  arab: string;
  latin: string;
  page: number;
  juz: number;
  hizb: number;
  asbab: number;
  audio: string;
  theme: number;
  text: string;
  notes: string;
}

export interface Doa {
  judul: string;
  arab: string;
  indo: string;
  source: string;
}

export interface Dzikir {
  id: number;
  type: string;
  arab: string;
  indo: string;
  ulang: string;
}

export interface Hadits {
  no: number;
  judul: string;
  arab: string;
  indo: string;
}

export interface Juz {
  number: number;
  name: string;
  name_start_arab: string;
  name_end_arab: string;
  name_start_id: string;
  name_end_id: string;
  verse_start: number;
  verse_end: number;
  surah_id_start: number;
  surah_id_end: number;
  ayat_arab: string;
  ayat_latin: string;
  ayat_indo: string;
}

export interface Surah {
  number: number;
  sequence: number;
  number_of_verses: number;
  name_short: string;
  name_long: string;
  name_en: string;
  name_id: string;
  translation_en: string;
  translation_id: string;
  revelation: string;
  revelation_en: string;
  revelation_id: string;
  tafsir: string;
  audio_url: string;
}

export interface Tafsir {
  id: number;
  ayah: number;
  wajiz: string;
  tahlili: string;
}

export interface Theme {
  id: number;
  name: string;
}

export interface Word {
  surah: number;
  ayah: number;
  word: number;
  arab: string;
  indo: string;
}
