import db from "@/config/alquran.database";
import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Keyword harus lebih dari 3 karakter");
  }
  const ayah: Ayah[] = db
    .prepare("SELECT * FROM ayah WHERE text LIKE ? ORDER BY CAST(id as INTEGER) ASC")
    .all(`%${keyword}%`) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
