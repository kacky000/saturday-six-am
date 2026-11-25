// A one-line roast of the alarm clock that rings at 6 a.m. on a Saturday.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast = "Ringing at 6 a.m. on a Saturday? Even my boss has the decency to ruin my weekend by email.";
const limit = 200;

if ([...roast].length > limit) throw new Error("roast is over 200 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), roast);
