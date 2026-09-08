import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Tafsir } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const tafsir: Tafsir[] = db.prepare("SELECT * FROM tafsir ORDER BY CAST(id AS INTEGER) ASC").all() as Tafsir[];
  if (!tafsir || tafsir.length === 0) {
    return notFound("Tafsir tidak ditemukan");
  }
  return success(tafsir);
});
