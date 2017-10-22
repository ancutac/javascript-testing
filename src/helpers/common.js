import { DIMENSIONS, ELEMENTS, COLORS } from "./constants";

function getDimension( dimension ) {
    if ( isNotNull( dimension ) && DIMENSIONS[ dimension ] ) {
        return DIMENSIONS[ dimension ];
    }

    console.warn( "Dimension not supported!" );
    return DIMENSIONS.small;
}

function getElementType( element ) {
    if ( isNotNull( element ) && ELEMENTS[ element ] ) {
        return ELEMENTS[ element ];
    }
    console.warn( "Element type not supported!" );
    return ELEMENTS.div;
}

function getColor( color ) {
    if ( isNotNull( color ) && COLORS[ color ] ) {
        return COLORS[ color ];
    }
    console.warn( "Color not supported!" );
    return COLORS.black;
}

function isNotNull( value ) {
    return value !== null
        && value !== undefined
        && value !== "null";
}

module.exports = {
    getDimension,
    getElementType,
    getColor,
};
