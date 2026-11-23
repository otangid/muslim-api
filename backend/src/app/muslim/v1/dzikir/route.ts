import { notFound, success, withErrorHandler } from "@/lib/response";
import { Dzikir } from "@/types/muslim";
import data from "@data/dzikir.json";

export const GET = withErrorHandler(async () => {
  const dzikir = data as Dzikir[];
  if (!dzikir || dzikir.length === 0) {
    return notFound("Dzikir tidak ditemukan");
  }
  return success(dzikir);
});
