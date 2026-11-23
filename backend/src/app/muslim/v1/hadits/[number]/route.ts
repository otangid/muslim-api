import { notFound, success, withErrorHandler } from "@/lib/response";
import { Hadits } from "@/types/muslim";
import data from "@data/hadits.json";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  if (!Number.isInteger(Number(number))) {
    return notFound("ID tidak valid");
  }
  const hadits: Hadits = data.find((h) => h.no === Number(number)) as Hadits;
  if (!hadits) {
    return notFound("Hadits tidak ditemukan");
  }
  return success(hadits);
});
