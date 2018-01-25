# MiNoBo

A mini opinionated node boilerplate.

To get up and running:

* `yarn start` or `npm start` to run.
* `yarn test` or `npm test` to run tests.
* `yarn test:watch` or `npm test:watch` to write tests while developing.
* `yarn test:coverage` or `npm test:coverage` to run test coverage.

Note: if you've already installed the husky package at least once (used for precommit npm script), you will need to run `yarn --force` or `npm install --no-cache`. For some reason the post-install script of husky does not run, when the package is pulled from yarn's or npm's cache.
