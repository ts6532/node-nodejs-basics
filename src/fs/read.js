import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

const read = async () => {
  const path = "./files/fileToRead.txt";

  try {
    if (!existsSync(path)) throw Error("FS operation failed");

    const content = await readFile(path, "utf8");

    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

await read();
