# WIP - Complete javascript testing example project
An example project for testing in javascript

## Usage

**Clone the repo**
```
git clone git@github.com:ancutac/javascript-testing.git
```

**Install dependencies**
```
npm i
```
or with [yarn](https://yarnpkg.com/), which I highly recommend
```
yarn
```
**Testing setup**
* webpack - babelify
* gulp - task runner for tests
* chai - assertion library
* sinon - mocking library 
* mocha - test framework
* phantomjs - headless browser (browser context needed since we modify the DOM)
* instanbul - code coverage

**Run project**

Generate bundles
```
npm run webpack
```

Running the tests
```
gulp testrunner
```

Running eslint
```
npm run lint
```

## Todos
- [ ] Fix code coverage reports
- [ ] Add setup with browserify
- [ ] Add setup with Karma
