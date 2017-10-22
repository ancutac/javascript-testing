import gulp from "gulp";
// Test Dependencies
import istanbulReport from "gulp-istanbul-report";
import mochaPhantomJS from "gulp-mocha-phantomjs";
import istanbul from "gulp-istanbul";
import open from "gulp-open";
import gutil from "gulp-util";
import webpack from "webpack";

gulp.task( "coverage-setup", [ "webpack" ], function () {
    return gulp.src( [ "test/babelify/code-babelify.js", "src/**/*.js" ] )
    // Covering files
        .pipe( istanbul( {
            coverageVariable: "__coverage__",
        } ) )
    // instrumented files will go here
        .pipe( gulp.dest( "coverage/" ) );
} );

gulp.task( "testrunner", [ "coverage-setup" ], function () {
    return gulp
        .src( "./test/index.html", { read: false } )
        .pipe( mochaPhantomJS( {
            reporter: [ "spec" ],
            phantomjs: {
                useColors: true,
                hooks: "mocha-phantomjs-istanbul",
                coverageFile: "./coverage/coverage.json",
            },
        } ) )
        .on( "finish", function () {
            gulp.src( "./coverage/coverage.json" )
                .pipe( istanbulReport( {
                    reporters: [ "text", "html" ],
                } ) );
        } )
        .pipe( open( {
            uri: "./coverage/index.html",
        } ) );
} );

gulp.task( "webpack", function ( callback ) {
    // run webpack
    webpack( require( "./webpack.config.js" ), function ( err, stats ) {
        if ( err ) {
            throw new gutil.PluginError( "webpack", err );
        }
        gutil.log( "[webpack]", stats.toString( {
            // output options
        } ) );
        callback();
    } );
} );
