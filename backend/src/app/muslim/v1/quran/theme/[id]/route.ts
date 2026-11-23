import { notFound, success, withErrorHandler } from "@/lib/response";
import { Theme } from "@/types/muslim";
import data from "@data/theme.json";

type Context = {
  params: Promise<{ id: string }>;
};

export const GET = withErrorHandler(async (_request: Request, context: Context) => {
  const { id } = await context.params;
  if (!Number.isInteger(Number(id))) {
    return notFound("ID tidak valid");
  }
  const theme = data.find((t) => t.id === Number(id)) as Theme;
  if (!theme) {
    return notFound("Tema tidak ditemukan");
  }
  return success(theme);
});
