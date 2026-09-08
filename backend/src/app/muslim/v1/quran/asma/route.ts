import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asma } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const asma: Asma[] = db.prepare("SELECT * FROM asmaul_husna ORDER BY CAST(id AS INTEGER) ASC").all() as Asma[];
  if (!asma || asma.length === 0) {
    return notFound("Asmaul Husna tidak ditemukan");
  }
  return success(asma);
});
