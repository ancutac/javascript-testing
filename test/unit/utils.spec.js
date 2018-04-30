import { expect } from "chai";

import { add, divide } from "../../src/utils";

export const utilsSpec = function ( ) {
    describe( "add(firstValue, secondValue)", function () {
        it( "should add two numbers", () => {
            const actualResult = add( 1, 2 );
            expect( actualResult ).to.equal( 3 );
        } );

        it( "should return 0 if NaN provided", () => {
            const actualResult = add( 1, "hello" );
            expect( actualResult ).to.equal( 0 );
        } );
    } );
    describe( "divide(firstValue, secondValue)", function () {
        it( "should divide two numbers", () => {
            const actualResult = divide( 4, 2 );
            expect( actualResult ).to.equal( 2 );
        } );

        it( "should return 0 if NaN provided", () => {
            const actualResult = divide( 1, "hello" );
            expect( actualResult ).to.equal( 0 );
        } );

        it( "should return 0 if dividing by 0", () => {
            const actualResult = divide( 1, 0 );
            expect( actualResult ).to.equal( 0 );
        } );
    } );
};
