const path = require("path")

module.exports = {
  stories: ["../packages/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    console.log(
      "config.plugins.CaseSensitivePathsPlugin",
      Array.isArray(config.plugins),
    )
    console.log(
      "findIndex",
      config.plugins.findIndex((ele) => ele === "CaseSensitivePathsPlugin"),
    )
    // delete config.plugins.CaseSensitivePathsPlugin
    console.log("config", config.plugins["CaseSensitivePathsPlugin"])
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@congenial-spoon/react-icon": path.resolve(
    //     __dirname,
    //     "../packages/remixicon/src/icons",
    //   ),
    // }
    config.resolve.extensions.push(".ts", ".tsx")
    return config
  },
  typescript: {
    reactDocgen: false,
  },
}
