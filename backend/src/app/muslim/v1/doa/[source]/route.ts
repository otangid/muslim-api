import db from "@/config/alquran.database";
import { notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";

type Context = {
  params: Promise<{ source: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { source } = await context.params;
  const doa: Doa[] = db.prepare("SELECT * FROM doa WHERE source = ? ORDER BY judul ASC").all(source) as Doa[];
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
