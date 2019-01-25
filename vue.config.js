module.exports = {
    chainWebpack: webpackConfig => {
        // When FIX_BUG is set in env, apply this workaround.
        // Alternatively one could check the process.env.npm_lifecycle_event (e.g. process.env.npm_lifecycle_event !== 'test:unit').
        // However this only works when run via `npm run test:unit`
        if (process.env.NODE_ENV === 'test' && process.env.FIX_BUG) {
            // Revert changes made by vue-cli-plugin-unit-mocha
            // @see https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-unit-mocha/index.js#L3-L18
            webpackConfig.target(undefined)

            webpackConfig.module
                .rule('vue')
                .use('vue-loader')
                .tap(options => {
                    options.optimizeSSR = true
                    return options
                })
        }
    }
}
