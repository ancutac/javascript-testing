export function add( a = 0, b = 0 ) {
    if ( isNaN( a ) || isNaN( b ) ) {
        console.log( "Values provided are not numbers!" );
        return 0;
    }

    return a + b;
}

export function divide( a = 0, b = 1 ) {
    if ( isNaN( a ) || isNaN( b ) ) {
        console.log( "Values provided are not numbers!" );
        return 0;
    }

    if ( b === 0 ) {
        console.log( "Please provide a value different then 0 for divider!" );
        return 0;
    }

    return a / b;
}

export function asyncOperation( value, callback ) {
    setTimeout( () => {
        callback( value );
    }, 1 );
}
