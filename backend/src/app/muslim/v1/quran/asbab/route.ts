import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asbab } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const asbab: Asbab[] = db.prepare("SELECT * FROM asbab_nuzul ORDER BY CAST(id as INTEGER) ASC").all() as Asbab[];
  if (!asbab || asbab.length === 0) {
    return notFound("Asbab tidak ditemukan");
  }
  return success(asbab);
});
