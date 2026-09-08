import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Juz } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const juz: Juz[] = db.prepare("SELECT * FROM juz ORDER BY CAST(number AS INTEGER) ASC").all() as Juz[];
  if (!juz || juz.length === 0) {
    return notFound("Juz tidak ditemukan");
  }
  return success(juz);
});
