import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import { join } from "node:path";

const copy = async () => {
  const srcPath = join(import.meta.dirname, "files");

  const destinationPath = join(import.meta.dirname, "./files_copy");

  try {
    if (existsSync(destinationPath) || !existsSync(srcPath))
      throw Error("FS operation failed");

    await cp(srcPath, destinationPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }
};

await copy();
