import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const hadits: Hadits[] = db.prepare("SELECT * FROM hadits ORDER BY CAST(no AS INTEGER) ASC").all() as Hadits[];
  if (!hadits || hadits.length === 0) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
