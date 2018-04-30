const path = require( "path" );
const UglifyJSPlugin = require( "uglifyjs-webpack-plugin" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};

const calculator = Object.assign( {}, config, {
    entry: "./src/Calculator.js",

    output: {
        path: path.resolve( __dirname, "dist/" ),
        filename: "calculator.js",
    },

    resolve: {
        modules: [ "node_modules" ],
    },

    devtool: "source-map",

    plugins: [
        new UglifyJSPlugin( { sourceMap: true } ),
        new BundleAnalyzerPlugin( {
            analyzerMode: "static",
            reportFilename: "bundle-report.html",
            openAnalyzer: false,
        } ),
    ],
} );

module.exports = [ calculator ];
