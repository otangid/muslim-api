import { notFound, success, withErrorHandler } from "@/lib/response";
import { Dzikir } from "@/types/muslim";
import data from "@data/dzikir.json";

type Context = {
  params: Promise<{ type: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { type } = await context.params;
  const dzikir = data.filter((d) => d.type === type) as Dzikir[];
  if (!dzikir || dzikir.length === 0) {
    return notFound("Dzikir tidak ditemukan");
  }
  return success(dzikir);
});
