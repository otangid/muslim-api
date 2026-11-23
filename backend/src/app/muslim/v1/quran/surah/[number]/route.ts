import { notFound, success, withErrorHandler } from "@/lib/response";
import { Surah } from "@/types/muslim";
import data from "@data/surah.json";

type Context = {
  params: Promise<{ number: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { number } = await context.params;
  if (!Number.isInteger(Number(number))) {
    return notFound("Nomor surah tidak valid");
  }
  const surah = data.find((s) => s.number === Number(number)) as Surah;
  if (!surah) {
    return notFound("Surah tidak ditemukan");
  }
  return success(surah);
});
