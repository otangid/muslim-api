import { notFound, success, withErrorHandler } from "@/lib/response";
import { Asma } from "@/types/muslim";
import data from "@data/asma.json";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  if (!Number.isInteger(Number(number))) {
    return notFound("Nomor tidak valid");
  }
  const asma = data.find((a) => a.id === Number(number)) as Asma;
  if (!asma) {
    return notFound("Asmaul tidak ditemukan");
  }
  return success(asma);
});
