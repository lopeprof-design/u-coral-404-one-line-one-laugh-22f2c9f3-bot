// One Line, One Laugh — writes one funny line to /output/entry.txt.
//
// The joke: you ask the speaker for calm, and it answers with the one
// sound nobody finds relaxing — your own bank balance, delivered in the
// softest voice it owns. The turn is the mismatch: spa voice, overdraft
// news. Deadpan, one sentence, and the punchline is the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my smart speaker for something relaxing, so it read my bank balance aloud in a spa voice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
