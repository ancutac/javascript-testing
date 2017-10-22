const path = require( "path" );
const UglifyJSPlugin = require( "uglifyjs-webpack-plugin" );
const nodeExternals = require( "webpack-node-externals" );

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "env" ],
                    },
                },

            },
        ],
    },
};

const draw = Object.assign( {}, config, {
    entry: "./src/draw.js",
    target: "node", // in order to ignore built-in modules like path, fs, etc.
    externals: [ nodeExternals( ) ], // in order to ignore all modules in node_modules folder

    output: {
        path: path.resolve( __dirname, "dist/" ),
        filename: "draw.js",
    },

    devtool: "source-map",

    plugins: [
        new UglifyJSPlugin( { sourceMap: true } ),
    ],
} );

const testsBabelify = Object.assign( {}, config, {
    entry: "./test/index.js",

    output: {
        path: path.resolve( __dirname, "test/babelify" ),
        filename: "tests-babelify.js",
    },
} );

const codeBabelify = Object.assign( {}, config, {
    entry: "./src/draw.js",

    output: {
        path: path.resolve( __dirname, "test/babelify" ),
        filename: "code-babelify.js",
    },
} );

module.exports = [ draw, testsBabelify, codeBabelify ];
