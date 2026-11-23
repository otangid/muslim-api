import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

export const GET = withErrorHandler(async () => {
  const ayah = data as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
