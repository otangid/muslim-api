import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Dzikir } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const dzikir: Dzikir[] = db.prepare("SELECT * FROM dzikir ORDER BY type ASC").all() as Dzikir[];
  if (!dzikir || dzikir.length === 0) {
    return notFound("Dzikir tidak ditemukan");
  }
  return success(dzikir);
});
