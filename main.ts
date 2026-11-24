import { mkdirSync, writeFileSync } from "node:fs";

// One single-line error message: names the real failure (the database
// connection died), says what to do next (check the connection, try again),
// and lands the twist in the last clause. The output is a fixed string, so
// every run writes byte-identical output.
const ENTRY =
  "The database connection died mid-sentence. Your query never got an answer — check the connection and try again; it won't revive itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
