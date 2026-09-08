import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asbab } from "@/types/muslim";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  const asbab: Asbab = db.prepare("SELECT * FROM asbab_nuzul WHERE id = ?").get(id) as Asbab;
  if (!asbab) {
    return notFound("Asbab tidak ditemukan");
  }
  return success(asbab);
});
