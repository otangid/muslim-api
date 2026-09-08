import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Juz } from "@/types/muslim";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  const juz: Juz = db.prepare("SELECT * FROM juz WHERE number = ?").get(number) as Juz;
  if (!juz) {
    return notFound("Juz tidak ditemukan");
  }
  return success(juz);
});
