import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ juz: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { juz } = await context.params;
  if (!Number.isInteger(Number(juz))) {
    return notFound("Nomor juz tidak valid");
  }
  const ayah = data.filter((a) => a.juz === Number(juz)) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
