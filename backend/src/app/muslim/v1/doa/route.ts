import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const doa: Doa[] = db.prepare("SELECT * FROM doa ORDER BY judul ASC").all() as Doa[];
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
