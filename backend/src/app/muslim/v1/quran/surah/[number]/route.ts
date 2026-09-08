import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Surah } from "@/types/muslim";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  const surah: Surah = db.prepare("SELECT * FROM surah WHERE number = ?").get(number) as Surah;
  if (!surah) {
    return notFound("Surah tidak ditemukan");
  }
  return success(surah);
});
