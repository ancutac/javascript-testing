import { expect } from "chai";
import sinon from "sinon";

import { getDimension, getElementType, getColor } from "../../src/helpers/common";

import { DIMENSIONS, COLORS, ELEMENTS } from "../../src/helpers/constants";

const commonSpec = function ( ) {
    describe( "getDimension() test", function () {
        let value;
        let expectedValue;

        beforeEach( function () {
            sinon.stub( console, "warn" );
        } );

        afterEach( function () {
            const result = getDimension( value );
            expect( result ).to.equal( expectedValue );
            console.warn.restore( );
        } );
        it( "undefined", function() {
            value = undefined;
            expectedValue = DIMENSIONS.small;
            // expect( console.warn.calledOnce ).to.be.true;
            // expect( console.warn.calledWith( "Dimension not supported!" ) ).to.be.true;
        } );
        it( "null", function() {
            value = null;
            expectedValue = DIMENSIONS.small;
        } );
        it( '"null"', function() {
            value = "null";
            expectedValue = DIMENSIONS.small;
        } );
        it( '""', function() {
            value = "";
            expectedValue = DIMENSIONS.small;
        } );
        it( '"test"', function() {
            value = "test";
            expectedValue = DIMENSIONS.small;
        } );
        it( '"large"', function() {
            value = "large";
            expectedValue = DIMENSIONS.large;
        } );
    } );
};

module.exports = commonSpec;
