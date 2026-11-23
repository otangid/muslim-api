import { badRequest, notFound, success, withErrorHandler } from "@/lib/response";
import { Doa } from "@/types/muslim";
import data from "@data/doa.json";

type Context = {
  params: Promise<{ keyword: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { keyword } = await context.params;
  if (keyword.trim().length <= 3) {
    return badRequest("Keyword harus lebih dari 3 karakter");
  }
  const base = data as Doa[];
  const doa = base.filter((d) => d.judul.toLowerCase().includes(keyword.toLowerCase()));
  if (!doa || doa.length === 0) {
    return notFound("Doa tidak ditemukan");
  }
  return success(doa);
});
