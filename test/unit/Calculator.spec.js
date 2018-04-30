import Calculator from "../../src/Calculator";
import * as utils from "../../src/utils";

test( "should call add and pass result to storeValue", () => {
    jest.spyOn( utils, "add" );
    jest.spyOn( utils, "asyncOperation" );
    Calculator.add( 1, 2, ( result ) => {
        expect( result ).toBe( 3 );
    } );
    expect( utils.add ).toBeCalled();
    expect( utils.asyncOperation ).toBeCalled();
} );
