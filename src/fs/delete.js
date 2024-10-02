import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { join } from "node:path";

const remove = async () => {
  const path = join(import.meta.dirname, "files", "fileToRemove.txt");

  try {
    if (!existsSync(path)) throw Error("FS operation failed");

    await rm(path);
  } catch (error) {
    console.log(error);
  }
};

await remove();
