import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Theme } from "@/types/muslim";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  const theme: Theme = db.prepare("SELECT * FROM theme WHERE id = ?").get(id) as Theme;
  if (!theme) {
    return notFound("Tema tidak ditemukan");
  }
  return success(theme);
});
