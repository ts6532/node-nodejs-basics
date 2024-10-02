import { fork } from "node:child_process";
import { join } from "node:path";
import { stdin, stdout } from "node:process";

const spawnChildProcess = async (args) => {
  const file = join(import.meta.dirname, "files", "script.js");

  const cp = await fork(file, args, { silent: true });

  stdin.pipe(cp.stdin);

  cp.stdout.pipe(stdout);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
