import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

type Context = {
  params: Promise<{ surah: string; ayah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, ayah } = await context.params;
  const ayahData: Ayah = db.prepare("SELECT * FROM ayah WHERE surah = ? AND ayah = ?").get(surah, ayah) as Ayah;
  if (!ayahData) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayahData);
});
