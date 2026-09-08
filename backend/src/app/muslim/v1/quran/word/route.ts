import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Word } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const word: Word[] = db
    .prepare("SELECT * FROM word ORDER BY CAST(surah as INTEGER), CAST(ayah as INTEGER), CAST(word as INTEGER) ASC")
    .all() as Word[];
  if (!word || word.length === 0) {
    return notFound("Kata per kata tidak ditemukan");
  }
  return success(word);
});
