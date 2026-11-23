import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ surah: string; start: string; end: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, start, end } = await context.params;
  if (!Number.isInteger(Number(surah)) || !Number.isInteger(Number(start)) || !Number.isInteger(Number(end))) {
    return notFound("Parameter tidak valid");
  }
  const ayah = data.filter(
    (a) => a.surah === Number(surah) && a.ayah >= Number(start) && a.ayah <= Number(end),
  ) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
