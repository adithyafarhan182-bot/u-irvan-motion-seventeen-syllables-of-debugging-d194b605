// Seventeen Syllables of Debugging — writes one 5-7-5 haiku to /output/entry.txt.
// Deterministic, Node 22 stdlib only, no network, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// Syllables, counted by hand: 5-7-5, seventeen in all.
//   Three(1) in(1) the(1) morn-ing(2) = 5
//   the(1) stack(1) trace(1) points(1) back(1) at(1) me(1) = 7
//   just(1) one(1) miss-ing(2) brace(1) = 5
// Three lines, 77 bytes, no trailing newline: a smaller text wins an exact tie.
const HAIKU = [
  "Three in the morning",
  "the stack trace points back at me",
  "just one missing brace",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
