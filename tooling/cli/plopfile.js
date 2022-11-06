const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const path = require('node:path');
const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

const workspaces = ['packages', 'hooks', 'utilities'];

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper('capitalize', (text: string) => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      // {
      //   type: 'input',
      //   name: 'description',
      //   message: 'The description of this component:',
      // },
      // {
      //   type: 'list',
      //   name: 'outDir',
      //   message: 'where should this component or package live?',
      //   default: 'packages',
      //   choices: workspaces,
      // },
    ],
    actions(answers) {
      const actions = [];
      if (!answers) return actions;
      const { componentName, description, outDir } = answers;
      console.log({ componentName, description, outDir });
      // const outDi = path.join(process.cwd(), outDir);
      actions.push({
        type: 'addMany',
        templateFiles: './src/template/marketing-activities/**',
        destination: `${process.cwd()}/{{outDir}}/{{dashCase componentName}}`,
        // base: '',
        data: { description, componentName, outDir },
        abortOnFail: true,
      });
      return actions;
    },
  });
};
