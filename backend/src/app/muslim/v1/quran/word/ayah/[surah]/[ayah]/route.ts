import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Word } from "@/types/muslim";

type Context = {
  params: Promise<{ surah: string; ayah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, ayah } = await context.params;
  const word: Word[] = db
    .prepare(
      "SELECT * FROM word WHERE surah = ? AND ayah = ? ORDER BY CAST(surah as INTEGER), CAST(ayah as INTEGER), CAST(word as INTEGER) ASC",
    )
    .all(surah, ayah) as Word[];
  if (!word || word.length === 0) {
    return notFound("Kata per kata tidak ditemukan");
  }
  return success(word);
});
