const path = require('path');
const { config } = require('process');
const loader = require('sass-loader');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-scss'],
    framework: '@storybook/vue',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');
        config.resolve.alias['~storybook'] = path.resolve(__dirname);

        return config;
    },
};
