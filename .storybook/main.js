module.exports = {
  stories: [
    "../src/**/*.components.mdx",
    "../src/**/*.components.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
