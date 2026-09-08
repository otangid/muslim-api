import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Theme } from "@/types/muslim";

export const GET = withErrorHandler(async () => {
  const theme: Theme[] = db.prepare("SELECT * FROM theme ORDER BY CAST(id AS INTEGER) ASC").all() as Theme[];
  if (!theme || theme.length === 0) {
    return notFound("Tema tidak ditemukan");
  }
  return success(theme);
});
