// Karma configuration
module.exports = function (config) {
config.set({
    basePath: "",
    frameworks: [ "mocha", "sinon", "chai" , "source-map-support" ],
    files: [
        { pattern: "./**/*.ts", included: true, watched: false }
    ],
    //preprocessors: {
    //    "./**/*.ts": [ "typescript", "sourcemap" ]
    //},

    preprocessors: { '**/!(*.d).ts': ['typescript'] },

    port: 8081,
    typescriptPreprocessor: {
        options: {
            sourceMap: true,
            noResolve: false
        },
        transformPath: function(path) {
            return path.replace(/\.ts$/, ".js");
        }
    },
    browsers: [ "Chrome" ],
    reporters: [ "progress", "mocha", "coverage" ],
    coverageReporter: {
        reporters: [
            {
                type: "text-summary"
            }
        ]
    },
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    plugins: [
        require("karma-coverage"),
        require("karma-chrome-launcher"),
        require("karma-sourcemap-writer"),
        require("karma-source-map-support"),
        require("karma-mocha-reporter"),
        require("karma-mocha"),
        require("karma-sinon"),
        require("karma-chai"),
        require("karma-sourcemap-loader"),
        require("karma-typescript-preprocessor")
    ]
})

}
