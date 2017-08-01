// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["karma-typescript", "mocha", "chai"],
        files: [
            { pattern: "app/components/mycoolcomponent/**/*.ts", included: true, watches: false }
        ],
        preprocessors: { "app/components/mycoolcomponent/**/*.ts": ["karma-typescript"] },
        port: 8081,
        typescriptPreprocessor: {
            options: {
                sourceMap: true,
                noResolve: false
            },
            transformPath: function (path) {
                return path.replace(/\.ts$/, ".js");
            }
        },
        browsers: ["PhantomJS", "Chrome"],
        reporters: ["progress", "mocha", "karma-typescript"],
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity,
        plugins: [
            require("karma-typescript"),
            require("karma-chrome-launcher"),
            require("karma-sourcemap-writer"),
            require("karma-mocha-reporter"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-phantomjs-launcher")
        ]
    })
}