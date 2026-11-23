import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asbab } from "@/types/muslim";
import data from "@data/asbab.json";

export const GET = withErrorHandler(async () => {
  const asbab = data as Asbab[];
  if (!asbab || asbab.length === 0) {
    return notFound("Asbab tidak ditemukan");
  }
  return success(asbab);
});
