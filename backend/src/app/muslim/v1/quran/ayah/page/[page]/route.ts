import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Ayah } from "@/types/muslim";

type Context = {
  params: Promise<{ page: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { page } = await context.params;
  const ayah: Ayah[] = db
    .prepare("SELECT * FROM ayah WHERE page = ? ORDER BY CAST(id as INTEGER) ASC")
    .all(page) as Ayah[];
  if (!ayah || ayah.length === 0) {
    return notFound("Ayah tidak ditemukan");
  }
  return success(ayah);
});
