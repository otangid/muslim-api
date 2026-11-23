import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";
import data from "@data/hadits.json";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Kata kunci harus lebih dari 3 karakter");
  }
  const hadits = data.filter((h) => h.judul.toLowerCase().includes(keyword.toLowerCase())) as Hadits[];
  if (!hadits || hadits.length === 0) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
