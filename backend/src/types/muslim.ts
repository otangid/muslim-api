export interface Asbab {
  id: string;
  ayah: string;
  text: string;
}

export interface Asma {
  id: string;
  arab: string;
  latin: string;
  indo: string;
}

export interface Ayah {
  id: string;
  surah: string;
  ayah: string;
  arab: string;
  latin: string;
  page: string;
  juz: string;
  hizb: string;
  asbab: string;
  audio: string;
  theme: string;
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
  type: string;
  arab: string;
  indo: string;
  ulang: string;
}

export interface Hadits {
  no: string;
  judul: string;
  arab: string;
  indo: string;
}

export interface Juz {
  number: string;
  name: string;
  name_start_arab: string;
  name_end_arab: string;
  name_start_id: string;
  name_end_id: string;
  verse_start: string;
  verse_end: string;
  surah_id_start: string;
  surah_id_end: string;
  ayat_arab: string;
  ayat_latin: string;
  ayat_indo: string;
}

export interface Surah {
  number: string;
  sequence: string;
  number_of_verses: string;
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
  id: string;
  ayah: string;
  wajiz: string;
  tahlili: string;
}

export interface Theme {
  id: string;
  name: string;
}

export interface Word {
  id: string;
  surah: string;
  ayah: string;
  word: string;
  arab: string;
  indo: string;
}
