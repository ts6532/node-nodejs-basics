import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const compress = async () => {
  const gzip = createGzip();

  const source = createReadStream(
    join(import.meta.dirname, "files", "fileToCompress.txt")
  );

  const destination = createWriteStream(
    join(import.meta.dirname, "files", "archive.gz")
  );

  await pipeline(source, gzip, destination);
};

await compress();
