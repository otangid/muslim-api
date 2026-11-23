import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ surah: string; ayah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, ayah } = await context.params;
  if (!Number.isInteger(Number(surah)) || !Number.isInteger(Number(ayah))) {
    return notFound("Surah atau Ayah tidak valid");
  }
  const ayahData: Ayah = data.find((a) => a.surah === Number(surah) && a.ayah === Number(ayah)) as Ayah;
  if (!ayahData) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayahData);
});
