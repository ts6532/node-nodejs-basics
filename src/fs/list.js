import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const list = async () => {
  const srcPath = join(import.meta.dirname,'files')

  try {
    if (!existsSync(srcPath)) throw Error("FS operation failed");

    const list = await readdir(srcPath)
    console.log(list)
  } catch (error) {
    console.log(error);
  }
};

await list();
