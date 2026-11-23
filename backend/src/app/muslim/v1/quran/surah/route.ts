import { notFound, success, withErrorHandler } from "@/lib/response";
import { Surah } from "@/types/muslim";
import data from "@data/surah.json";

export const GET = withErrorHandler(async () => {
  const surah = data as Surah[];
  if (!surah || surah.length === 0) {
    return notFound("Surah tidak ditemukan");
  }
  return success(surah);
});
