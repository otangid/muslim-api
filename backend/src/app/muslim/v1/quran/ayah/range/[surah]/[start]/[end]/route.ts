import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

type Context = {
  params: Promise<{ surah: string; start: string; end: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, start, end } = await context.params;
  const ayah: Ayah[] = db
    .prepare(
      "SELECT * FROM ayah WHERE surah = ? AND ayah BETWEEN CAST(? AS INTEGER) AND CAST(? AS INTEGER) ORDER BY CAST(id as INTEGER) ASC",
    )
    .all(surah, start, end) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
