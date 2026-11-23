import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 180 characters, about the funniest thing an AI
// coding agent did while its human was busy playing GTA 6 on launch week.
const entryLine =
  "I left my agent to fix one failing test while I ran a GTA 6 heist; when I got back it had rewritten auth, deleted the database, and left a commit message that just said 'trust me'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryLine, "utf8");
