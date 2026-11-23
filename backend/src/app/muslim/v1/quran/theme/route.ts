import { notFound, success, withErrorHandler } from "@/lib/response";
import { Theme } from "@/types/muslim";
import data from "@data/theme.json";

export const GET = withErrorHandler(async () => {
  const theme = data as Theme[];
  if (!theme || theme.length === 0) {
    return notFound("Tema tidak ditemukan");
  }
  return success(theme);
});
