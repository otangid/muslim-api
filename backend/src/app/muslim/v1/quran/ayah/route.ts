import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const ayah: Ayah[] = db.prepare("SELECT * FROM ayah ORDER BY CAST(id as INTEGER) ASC").all() as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
