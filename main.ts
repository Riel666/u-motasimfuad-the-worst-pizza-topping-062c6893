import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Warm mayonnaise, gummy bears, and a crust that sighs when you bite it. This is not a pizza. It is a cry for help that someone melted cheese on.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE, "utf8");
