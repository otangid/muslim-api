import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Tafsir } from "@/types/muslim";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  const tafsir: Tafsir = db.prepare("SELECT * FROM tafsir WHERE id = ?").get(id) as Tafsir;
  if (!tafsir) {
    return notFound("Tafsir tidak ditemukan");
  }
  return success(tafsir);
});
