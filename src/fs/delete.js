import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

const remove = async () => {
    const path = "./files/fileToRemove.txt";

    try {
      if (!existsSync(path)) throw Error("FS operation failed");
  
      await rm(path);
    } catch (error) {
      console.log(error);
    }
};

await remove();