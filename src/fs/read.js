import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const read = async () => {
  const srcPath = join(import.meta.dirname,'files', 'fileToRead.txt')

  try {
    if (!existsSync(srcPath)) throw Error("FS operation failed");

    const content = await readFile(srcPath, "utf8");

    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

await read();
