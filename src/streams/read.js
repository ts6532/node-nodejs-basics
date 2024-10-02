import { createReadStream } from "node:fs";
import { join } from "node:path";
import { stdout } from "node:process";
import { pipeline } from "node:stream/promises";

const read = async () => {
  const path = join(import.meta.dirname, "files", "fileToRead.txt");

  await pipeline(createReadStream(path), stdout);
};

await read();
