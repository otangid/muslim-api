import { notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";
import data from "@data/hadits.json";

export const GET = withErrorHandler(async () => {
  const hadits = data as Hadits[];
  if (!hadits || hadits.length === 0) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
