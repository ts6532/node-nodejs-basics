import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";

const list = async () => {
  const path = "./files";

  try {
    if (!existsSync(path)) throw Error("FS operation failed");

    const list = await readdir(path)
    console.log(list)
  } catch (error) {
    console.log(error);
  }
};

await list();
