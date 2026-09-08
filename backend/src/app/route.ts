import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Muslim API",
    version: "v1",
    description: "API untuk kebutuhan harian Muslim (Al-Qur'an bahasa Indonesia, Hadits, Doa, Dzikir, dll)",
    author: "Otang (Diki Zulkarnaen)",
    baseUrl: "https://api.otang.id",
    endpoints: {
      muslim: {
        v1: {
          quran: {
            asbab: [
              {
                path: "/muslim/v1/quran/asbab",
                method: "GET",
                description: "Mendapatkan daftar Asbabun Nuzul",
                example: "/muslim/v1/quran/asbab",
              },
              {
                path: "/muslim/v1/quran/asbab/:id",
                params: {
                  id: "ID dari Asbabun Nuzul (1-286)",
                },
                method: "GET",
                description: "Mendapatkan spesifik Asbabun Nuzul berdasarkan ID",
                example: "/muslim/v1/quran/asbab/1",
              },
            ],
            asma: [
              {
                path: "/muslim/v1/quran/asma",
                method: "GET",
                description: "Mendapatkan daftar Asmaul Husna",
                example: "/muslim/v1/quran/asma",
              },
              {
                path: "/muslim/v1/quran/asma/:number",
                params: {
                  number: "Nomor dari Asmaul Husna (1-99)",
                },
                method: "GET",
                description: "Mendapatkan spesifik Asmaul Husna berdasarkan nomor",
                example: "/muslim/v1/quran/asma/1",
              },
            ],
            ayah: [
              {
                path: "/muslim/v1/quran/ayah",
                method: "GET",
                description: "Mendapatkan daftar Ayah-ayah Al-Qur'an",
                example: "/muslim/v1/quran/ayah",
              },
              {
                path: "/muslim/v1/quran/ayah/range/:surah/:start/:end",
                params: {
                  surah: "Nomor surah (1-114)",
                  start: "Nomor awal ayah dalam surah",
                  end: "Nomor akhir ayah dalam surah",
                },
                method: "GET",
                description: "Mendapatkan range ayah berdasarkan nomor surah",
                example: "/muslim/v1/quran/ayah/range/1/1/3",
              },
              {
                path: "/muslim/v1/quran/ayah/surah/:surah",
                params: {
                  surah: "Nomor surah (1-114)",
                },
                method: "GET",
                description: "Mendapatkan ayah berdasarkan nomor surah",
                example: "/muslim/v1/quran/ayah/surah/1",
              },
              {
                path: "/muslim/v1/quran/ayah/juz/:juz",
                params: {
                  juz: "Nomor juz (1-30)",
                },
                method: "GET",
                description: "Mendapatkan ayah berdasarkan nomor juz",
                example: "/muslim/v1/quran/ayah/juz/1",
              },
              {
                path: "/muslim/v1/quran/ayah/page/:page",
                params: {
                  page: "Nomor halaman (1-604)",
                },
                method: "GET",
                description: "Mendapatkan ayah berdasarkan nomor halaman",
                example: "/muslim/v1/quran/ayah/page/1",
              },
              {
                path: "/muslim/v1/quran/ayah/specific/:surah/:ayah",
                params: {
                  surah: "Nomor surah (1-114)",
                  ayah: "Nomor ayah dalam surah",
                },
                method: "GET",
                description: "Mendapatkan ayah berdasarkan nomor surah dan nomor ayah",
                example: "/muslim/v1/quran/ayah/specific/1/3",
              },
              {
                path: "/muslim/v1/quran/ayah/find/:keyword",
                params: {
                  keyword: "Kata kunci pencarian (Terjemahan Indonesia)",
                },
                method: "GET",
                description: "Mendapatkan ayah berdasarkan kata kunci (Terjemahan Indonesia)",
                example: "/muslim/v1/quran/ayah/find/Maha Pengasih",
              },
            ],
            juz: [
              {
                path: "/muslim/v1/quran/juz",
                method: "GET",
                description: "Mendapatkan daftar Juz Al-Qur'an",
                example: "/muslim/v1/quran/juz",
              },
              {
                path: "/muslim/v1/quran/juz/:number",
                params: {
                  number: "Nomor juz (1-30)",
                },
                method: "GET",
                description: "Mendapatkan informasi juz berdasarkan nomor juz",
                example: "/muslim/v1/quran/juz/1",
              },
            ],
            surah: [
              {
                path: "/muslim/v1/quran/surah",
                method: "GET",
                description: "Mendapatkan daftar Surah Al-Qur'an",
                example: "/muslim/v1/quran/surah",
              },
              {
                path: "/muslim/v1/quran/surah/:number",
                params: {
                  number: "Nomor surah (1-114)",
                },
                method: "GET",
                description: "Mendapatkan informasi surah berdasarkan nomor surah",
                example: "/muslim/v1/quran/surah/1",
              },
            ],
            tafsir: [
              {
                path: "/muslim/v1/quran/tafsir",
                method: "GET",
                description: "Mendapatkan daftar Tafsir Al-Qur'an",
                example: "/muslim/v1/quran/tafsir",
              },
              {
                path: "/muslim/v1/quran/tafsir/:id",
                params: {
                  id: "ID dari Tafsir Al-Qur'an (1-6236)",
                },
                method: "GET",
                description: "Mendapatkan tafsir berdasarkan ID",
                example: "/muslim/v1/quran/tafsir/1",
              },
            ],
            theme: [
              {
                path: "/muslim/v1/quran/theme",
                method: "GET",
                description: "Mendapatkan daftar Tema Al-Qur'an",
                example: "/muslim/v1/quran/theme",
              },
              {
                path: "/muslim/v1/quran/theme/:id",
                params: {
                  id: "ID dari Tema Al-Qur'an (1-1121)",
                },
                method: "GET",
                description: "Mendapatkan tema berdasarkan ID",
                example: "/muslim/v1/quran/theme/1",
              },
            ],
            word: [
              {
                path: "/muslim/v1/quran/word",
                method: "GET",
                description: "Mendapatkan daftar Kata Al-Qur'an",
                example: "/muslim/v1/quran/word",
              },
              {
                path: "/muslim/v1/quran/word/surah/:number",
                params: {
                  number: "Nomor surah (1-114)",
                },
                method: "GET",
                description: "Mendapatkan kata berdasarkan nomor surah",
                example: "/muslim/v1/quran/word/surah/1",
              },
              {
                path: "/muslim/v1/quran/word/ayah/:surah/:ayah",
                params: {
                  surah: "Nomor surah (1-114)",
                  ayah: "Nomor ayah dalam surah",
                },
                method: "GET",
                description: "Mendapatkan kata spesifik ayah dalam surah",
                example: "/muslim/v1/quran/word/ayah/1/1",
              },
            ],
          },
          doa: [
            {
              path: "/muslim/v1/doa",
              method: "GET",
              description: "Daftar Doa-doa harian",
              example: "/muslim/v1/doa",
            },
            {
              path: "/muslim/v1/doa/:source",
              params: {
                source: "Sumber doa (quran, hadits, pilihan, harian, ibadah, haji, lainnya)",
              },
              method: "GET",
              description: "Mendapatkan daftar doa berdasarkan sumber",
              example: "/muslim/v1/doa/quran",
            },
            {
              path: "/muslim/v1/doa/find/:keyword",
              params: {
                keyword: "Kata kunci pencarian (Judul Doa)",
              },
              method: "GET",
              description: "Mendapatkan doa berdasarkan kata kunci (Judul Doa)",
              example: "/muslim/v1/doa/find/Kebaikan",
            },
          ],
          dzikir: [
            {
              path: "/muslim/v1/dzikir",
              method: "GET",
              description: "Daftar Dzikir-dzikir harian",
              example: "/muslim/v1/dzikir",
            },
            {
              path: "/muslim/v1/dzikir/:type",
              params: {
                type: "Jenis dzikir (pagi, sore, solat)",
              },
              method: "GET",
              description: "Mendapatkan daftar dzikir berdasarkan jenis",
              example: "/muslim/v1/dzikir/pagi",
            },
          ],
          hadits: [
            {
              path: "/muslim/v1/hadits",
              method: "GET",
              description: "Daftar Hadits Arbain",
              example: "/muslim/v1/hadits",
            },
            {
              path: "/muslim/v1/hadits/:number",
              params: {
                number: "Nomor hadits (1-42)",
              },
              method: "GET",
              description: "Mendapatkan hadits berdasarkan nomor hadits arbain",
              example: "/muslim/v1/hadits/1",
            },
            {
              path: "/muslim/v1/hadits/find/:keyword",
              params: {
                keyword: "Kata kunci pencarian (Judul Hadits)",
              },
              method: "GET",
              description: "Mendapatkan hadits berdasarkan kata kunci (Judul Hadits)",
              example: "/muslim/v1/hadits/find/Amalan",
            },
          ],
        },
      },
    },
    status_codes: {
      200: "Success",
      404: "Data tidak ditemukan",
      500: "Kesalahan server",
    },
    timestamp: new Date().toISOString(),
  });
}
