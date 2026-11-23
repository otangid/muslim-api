import { notFound, success, withErrorHandler } from "@/lib/response";
import { Juz } from "@/types/muslim";
import data from "@data/juz.json";

export const GET = withErrorHandler(async () => {
  const juz = data as Juz[];
  if (!juz || juz.length === 0) {
    return notFound("Juz tidak ditemukan");
  }
  return success(juz);
});
