# Vue cli-plugin-unit-mocha bug
See issue [#3370](https://github.com/vuejs/vue-cli/issues/3370)

## Steps to reproduce
1. Install project `npm install`
2. Run serve command in test env: `NODE_ENV=test npm run serve`

## Workaround
See [`vue.config.js`](./vue.config.js) for a workaround.
Set environment variable: `export FIX_BUG=true`
