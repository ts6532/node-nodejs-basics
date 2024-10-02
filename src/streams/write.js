import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { stdin } from "node:process";
import { pipeline } from "node:stream/promises";

const write = async () => {
  const path = join(import.meta.dirname, "files", "fileToWrite.txt");

  await pipeline(stdin, createWriteStream(path));
};

await write();
