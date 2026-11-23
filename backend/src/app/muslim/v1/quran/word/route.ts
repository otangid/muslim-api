import { notFound, success, withErrorHandler } from "@/lib/response";
import { Word } from "@/types/muslim";
import data from "@data/word.json";

export const GET = withErrorHandler(async () => {
  const word: Word[] = data as Word[];
  if (!word || word.length === 0) {
    return notFound("Kata per kata tidak ditemukan");
  }
  return success(word);
});
