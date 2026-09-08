import db from "@/config/alquran.database";
import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Keyword harus lebih dari 3 karakter");
  }
  const hadits: Hadits[] = db
    .prepare("SELECT * FROM hadits WHERE judul LIKE ? ORDER BY CAST(no AS INTEGER) ASC")
    .all(`%${keyword}%`) as Hadits[];
  if (!hadits || hadits.length === 0) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
