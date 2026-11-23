import { notFound, success, withErrorHandler } from "@/lib/response";
import { Juz } from "@/types/muslim";
import data from "@data/juz.json";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  if (!Number.isInteger(Number(number))) {
    return notFound("Nomor juz tidak valid");
  }
  const juz = data.find((j) => j.number === Number(number)) as Juz;
  if (!juz) {
    return notFound("Juz tidak ditemukan");
  }
  return success(juz);
});
