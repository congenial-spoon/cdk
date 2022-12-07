const path = require('path');

module.exports = {
  stories: ['../packages/**/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    // delete config.plugins.CaseSensitivePathsPlugin
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@@cuiller/cdk/react-icon": path.resolve(
    //     __dirname,
    //     "../packages/remixicon/src/icons",
    //   ),
    // }
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  typescript: {
    reactDocgen: false,
  },
};
