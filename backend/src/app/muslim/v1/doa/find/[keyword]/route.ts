import db from "@/config/alquran.database";
import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Keyword harus lebih dari 3 karakter");
  }
  const doa: Doa[] = db.prepare("SELECT * FROM doa WHERE judul LIKE ? ORDER BY judul ASC").all(`%${keyword}%`) as Doa[];
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
