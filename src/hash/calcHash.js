import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const calculateHash = async () => {
    const filePath = path.join(import.meta.dirname,'files', 'fileToCalculateHashFor.txt')
    const content = await readFile(filePath)

    const hash = createHash('sha256').update(content).digest('hex')

    console.log(hash)
};

await calculateHash();