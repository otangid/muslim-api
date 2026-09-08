import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Surah } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const surah: Surah[] = db.prepare("SELECT * FROM surah ORDER BY CAST(number AS INTEGER) ASC").all() as Surah[];
  if (!surah || surah.length === 0) {
    return notFound("Surah tidak ditemukan");
  }
  return success(surah);
});
