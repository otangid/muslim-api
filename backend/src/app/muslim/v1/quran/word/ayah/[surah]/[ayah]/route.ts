import { notFound, success, withErrorHandler } from "@/lib/response";
import { Word } from "@/types/muslim";
import data from "@data/word.json";

type Context = {
  params: Promise<{ surah: string; ayah: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { surah, ayah } = await context.params;
  if (!Number.isInteger(Number(surah)) || !Number.isInteger(Number(ayah))) {
    return notFound("Surah atau Ayah tidak valid");
  }
  const word = data.filter((w) => w.surah === Number(surah) && w.ayah === Number(ayah)) as Word[];
  if (!word || word.length === 0) {
    return notFound("Kata per kata tidak ditemukan");
  }
  return success(word);
});
