const karmaConfig = {
    frameworks: [ "mocha", "sinon-chai" ],
    files: [
        "test/babelify/tests-babelify.js",
    ],
    customLaunchers: {
        chromeHeadless_without_security: {
            base: "ChromeHeadless",
        },
    },
    reporters: [ "mocha", "coverage" ],
    browsers: [ "chromeHeadless_without_security" ],
    mochaReporter: {
        output: "autowatch",
    },
    coverageReporter: {
        dir: "coverage",
        reporters: [
            { type: "text" },
            { type: "text-summary" },
            { type: "html" },
        ],
    },
    singleRun: true,
};

module.exports = ( config ) => {
    config.set( karmaConfig );
};
