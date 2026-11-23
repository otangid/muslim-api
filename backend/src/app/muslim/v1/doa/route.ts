import { notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";
import data from "@data/doa.json";

export const GET = withErrorHandler(async () => {
  const doa = data as Doa[];
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
