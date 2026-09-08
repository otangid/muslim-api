import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

type Context = {
  params: Promise<{ surah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah } = await context.params;
  const ayah: Ayah[] = db
    .prepare("SELECT * FROM ayah WHERE surah = ? ORDER BY CAST(id as INTEGER) ASC")
    .all(surah) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
