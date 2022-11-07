import path from 'path';

export async function resolveOutputPath(
  overridePath?: string,
): Promise<string> {
  const cwd = process.cwd();
  if (overridePath) {
    return path.resolve(process.cwd(), overridePath);
  }
  const outFilePath = cwd;

  return outFilePath;
}
