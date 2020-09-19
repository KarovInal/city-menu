const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#EC1C24',
                            '@secondary-color': '#231F20',
                            '@text-color': '#1A1A1A',
                            '@text-color-secondary': '#616161',
                            '@disabled-color': '#949494',
                            '@border-color-base': '#E6E6E6',
                            '@primary-background': '#F7F7F7',
                            '@secondary-background': '#FFFFFF',
                            '@font-family': 'Roboto, sans-serif'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
