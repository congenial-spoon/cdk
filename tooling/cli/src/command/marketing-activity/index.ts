import { writeFile } from 'fs';
import ora from 'ora';
import { promisify } from 'util';
import { configFileName, resolveConfig } from '../../utils/resolve-config';

const writeFileAsync = promisify(writeFile);
import minimist from 'minimist';

const args = process.argv.slice(2);
const argv = minimist(args);
import path from 'path';

export async function generateMarketingActivity() {
  // const spinner = ora('Generating marketing activity\n').start();
  // const cuillerConfig = resolveConfig();
  const plopfile = path.join(__dirname, '..', 'plopfile.js');
  const { Plop, run } = await import('plop');
  Plop.prepare(
    {
      cwd: process.cwd(),
      configPath: plopfile,
      // preload: argv.preload || [],
      // completion: argv.completion,
    },
    (env) =>
      Plop.execute(env, (env) => {
        const options = {
          ...env,
          dest: process.cwd(), // this will make the destination path to be based on the cwd when calling the wrapper
        };
        return run(options, undefined, true);
      }),
  );

  // spinner.info();
  // spinner.succeed();
}
