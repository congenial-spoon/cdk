import jiti from 'jiti';
import { IConfig } from './types';

export const configFileName = 'cuiller.config';
export function resolveConfig() {
  const cuillerConfig: IConfig = tryRequire(`./${configFileName}`, process.cwd());
  if (!cuillerConfig) {
    throw new Error(
      `Could not find @cuiller/cli's config  in ${process.cwd()}. Please provide config.`,
    );
  } else {
    return cuillerConfig;
  }
}
export function tryRequire(id: string, rootDir: string = process.cwd()) {
  const _require = jiti(rootDir, { interopDefault: true, esmResolve: true });
  try {
    return _require(id);
  } catch (err: any) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      console.error(`Error trying import ${id} from ${rootDir}`, err);
    }
    return null;
  }
}
