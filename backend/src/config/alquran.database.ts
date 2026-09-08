import path from "path";
import Database from "better-sqlite3";

const dbPath = path.resolve(process.cwd(), "databases/alquran.db");

const db = new Database(dbPath, {
  readonly: true,
  fileMustExist: true,
});

export default db;
