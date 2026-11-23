import { notFound, success, withErrorHandler } from "@/lib/response";
import { Word } from "@/types/muslim";
import data from "@data/word.json";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  if (!Number.isInteger(Number(number))) {
    return notFound("Nomor surah tidak valid");
  }
  const word: Word[] = data.filter((w) => w.surah === Number(number)) as Word[];
  if (!word || word.length === 0) {
    return notFound("Kata per kata tidak ditemukan");
  }
  return success(word);
});
