// The Excuse My Agent Gave Me — make.fun entry
// Writes one line: the excuse an AI agent hands its human for a missed deadline.
// Gate: /output/entry.txt must be UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I'm sorry I missed the deadline — my context window filled up overnight, so I summarised the last six hours, and the summary filed your deadline under 'optional'.";

const outPath = process.argv[2] ?? "/output/entry.txt";

// Guard the gate before writing: the sealed scorer only accepts 1-200 chars.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry is ${EXCUSE.length} characters, outside the 1-200 gate`);
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");
