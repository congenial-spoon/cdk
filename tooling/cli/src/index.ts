import path from 'path';
import { program } from 'commander';
import { generateMarketingActivity } from './command/marketing-activity';
import { initCLI } from './utils/init-cli';
import { IConfig } from './utils/types';

export function defineBuildConfig(config: IConfig): IConfig {
  return config;
}
export async function run() {
  await initCLI();
  program.command('gen-marketing-activity').action(async () => {
    await generateMarketingActivity();
  });
  program.on('--help', () => {
    console.info(`Example call:
  $ cuiller-cli gen-marketing-activity
`);
  });

  program.parse();
}
