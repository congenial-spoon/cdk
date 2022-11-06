import path from 'path';
import { program } from 'commander';
import { initCLI } from './utils/init-cli';

export async function run() {
  await initCLI();

  program.on('--help', () => {
    console.info(`Example call:
  $ chakra-cli tokens theme.ts
`);
  });

  program.parse();
}
