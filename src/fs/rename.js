import { existsSync } from "node:fs";
import { rename as renameFile } from "node:fs/promises";

const rename = async () => {
    const srcPath = "./files/wrongFilename.txt";

    const destinationPath = "./files/properFilename.md";
  
    try {
      if (existsSync(destinationPath) || !existsSync(srcPath)) throw Error("FS operation failed");
  
      await renameFile(srcPath, destinationPath);
    } catch (error) {
      console.log(error);
    }
};

await rename();