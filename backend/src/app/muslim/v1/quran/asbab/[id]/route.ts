import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asbab } from "@/types/muslim";
import data from "@data/asbab.json";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  if (!Number.isInteger(Number(id))) {
    return notFound("ID tidak valid");
  }
  const asbab = data.find((a) => a.id === Number(id)) as Asbab;
  if (!asbab) {
    return notFound("Asbab tidak ditemukan");
  }
  return success(asbab);
});
