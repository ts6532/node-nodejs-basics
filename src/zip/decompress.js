import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";

const decompress = async () => {
    const unzip = createUnzip();

    const source = createReadStream(
      join(import.meta.dirname, "files", "archive.gz")
    );
  
    const destination = createWriteStream(
      join(import.meta.dirname, "files", "fileToCompress.txt")
    );
  
    await pipeline(source, unzip, destination);
};

await decompress();