import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asma } from "@/types/muslim";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  const asma: Asma = db.prepare("SELECT * FROM asmaul_husna WHERE id = ?").get(number) as Asma;
  if (!asma) {
    return notFound("Asmaul tidak ditemukan");
  }
  return success(asma);
});
