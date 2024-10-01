import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";

const create = async () => {
  const path = "./files/fresh.txt";

  try {
    if (existsSync(path)) throw Error("FS operation failed");

    await writeFile(path, "I am fresh and young");
  } catch (error) {
    console.error(error);
  }
};

await create();
