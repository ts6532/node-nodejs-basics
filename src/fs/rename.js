import { existsSync } from "node:fs";
import { rename as renameFile } from "node:fs/promises";
import { join } from "node:path";

const rename = async () => {
    const srcPath = join(import.meta.dirname,'files', 'wrongFilename.txt')
    const destinationPath = join(import.meta.dirname,'files', 'properFilename.txt')
  
    try {
      if (existsSync(destinationPath) || !existsSync(srcPath)) throw Error("FS operation failed");
  
      await renameFile(srcPath, destinationPath);
    } catch (error) {
      console.log(error);
    }
};

await rename();