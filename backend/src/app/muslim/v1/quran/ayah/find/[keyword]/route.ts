import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";
import data from "@data/ayah.json";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Kata kunci harus lebih dari 3 karakter");
  }
  const ayah = data.filter((a) => a.text.toLowerCase().includes(keyword.toLowerCase())) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
