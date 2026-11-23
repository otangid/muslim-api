import { notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";
import data from "@data/doa.json";

type Context = {
  params: Promise<{ source: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { source } = await context.params;
  const doa = data.filter((d) => d.source === source) as Doa[];
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
