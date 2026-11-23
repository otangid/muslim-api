import { notFound, success, withErrorHandler } from "@/lib/response";
import { Tafsir } from "@/types/muslim";
import data from "@data/tafsir.json";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  if (!Number.isInteger(Number(id))) {
    return notFound("ID tidak valid");
  }
  const tafsir = data.find((t) => t.id === Number(id)) as Tafsir;
  if (!tafsir) {
    return notFound("Tafsir tidak ditemukan");
  }
  return success(tafsir);
});
