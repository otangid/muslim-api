import { notFound, success, withErrorHandler } from "@/lib/response";
import { Tafsir } from "@/types/muslim";
import data from "@data/tafsir.json";

export const GET = withErrorHandler(async () => {
  const tafsir = data as Tafsir[];
  if (!tafsir || tafsir.length === 0) {
    return notFound("Tafsir tidak ditemukan");
  }
  return success(tafsir);
});
