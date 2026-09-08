import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  const hadits: Hadits = db.prepare("SELECT * FROM hadits WHERE no = ?").get(number) as Hadits;
  if (!hadits) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
