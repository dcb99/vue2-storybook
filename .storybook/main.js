const path = require('path');
const { config } = require('process');
const loader = require('sass-loader');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/vue',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');
        config.resolve.alias['~storybook'] = path.resolve(__dirname);

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'style-resources-loader',
                    options: {
                        patterns: [path.resolve(__dirname, './src/scss/main.scss')],
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });
        return config;
    },
};
