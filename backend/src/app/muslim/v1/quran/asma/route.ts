import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asma } from "@/types/muslim";
import data from "@data/asma.json";

export const GET = withErrorHandler(async () => {
  const asma = data as Asma[];
  if (!asma || asma.length === 0) {
    return notFound("Asmaul Husna tidak ditemukan");
  }
  return success(asma);
});
