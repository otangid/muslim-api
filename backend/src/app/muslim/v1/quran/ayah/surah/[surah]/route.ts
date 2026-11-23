import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ surah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah } = await context.params;
  if (!Number.isInteger(Number(surah))) {
    return notFound("Nomor surah tidak valid");
  }
  const ayah = data.filter((a) => a.surah === Number(surah)) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
