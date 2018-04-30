import { expect } from "chai";
import sinon from "sinon";

import Calculator from "../../src/Calculator";
import * as utils from "../../src/utils";

export const CalculatorSpecs = function ( ) {
    describe( "add(firstValue, secondValue)", function () {
        beforeEach( () => {
            sinon.spy( utils, "add" );
            sinon.spy( utils, "asyncOperation" );
        } );
        afterEach( () => {
            utils.add.restore();
            utils.asyncOperation.restore();
        } );
        it( "should call add and pass result to storeValue", () => {
            Calculator.add( 1, 2, ( result ) => {
                expect( result ).to.equal( 3 );
            } );
            expect( utils.add.calledOnce ).to.equal( true );
            expect( utils.asyncOperation.calledOnce ).to.equal( true );
        } );
    } );
};
