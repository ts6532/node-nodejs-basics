import { join } from "node:path";
import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  const createWorker = (n) => {
    const path = join(import.meta.dirname, "/worker.js");

    return new Promise((resolve, reject) => {
      const worker = new Worker(path, { workerData: { n } });
      
      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data,
        });
      });

      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });
      });
    });
  };

  const cores = os.cpus();

  const promises = [];

  cores.forEach((core, idx) => {
    promises.push(createWorker(10 + idx));
  });

  const res = await Promise.all(promises);

  console.log(res);
};

await performCalculations();
