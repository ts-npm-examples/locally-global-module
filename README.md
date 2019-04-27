# Locally global module
A module that uses global types internally but these will not get loaded in projects that import this module.

## What are global types
A `.ts` file that doesn't contain any `import`s and `export`s is recognized as a script (rather than a module) and everything defined there is available globally in all files. It is common practice to use scripts that only contain type definitions, so that types that are used frequently across the project don't need to be imported every time.

## Clone
1. Clone with `git clone git@github.com:ts-npm-examples/basic-module.git`
2. Populate node_modules with `yarn`
3. Test with `yarn test`
4. Build with `yarn build`

## Use as module
Install this module using `yarn add @ts-npm-examples/basic-module` or `npm i @ts-nmp-examples/basic-module`. You can use the module in both JavaScript and TypeScript projects. The types in `src/types.ts` are designed *not* to be accessible from outside of this module.