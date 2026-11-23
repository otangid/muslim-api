import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ page: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { page } = await context.params;
  if (!Number.isInteger(Number(page))) {
    return notFound("Nomor halaman tidak valid");
  }
  const ayah = data.filter((a) => a.page === Number(page)) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
