import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Dzikir } from "@/types/muslim";

type Context = {
  params: Promise<{ type: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { type } = await context.params;
  const dzikir: Dzikir[] = db
    .prepare("SELECT * FROM dzikir WHERE type = ? ORDER BY CAST(id AS INTEGER) ASC")
    .all(type) as Dzikir[];
  if (!dzikir || dzikir.length === 0) {
    return notFound("Dzikir tidak ditemukan");
  }
  return success(dzikir);
});
