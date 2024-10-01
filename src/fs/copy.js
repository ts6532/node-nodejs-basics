import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";

const copy = async () => {
  const srcPath = "./files";

  const destinationPath = "./files_copy";

  try {
    if (existsSync(destinationPath) || !existsSync(srcPath)) throw Error("FS operation failed");

    await cp(srcPath, destinationPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }
};

await copy();
