import { getDimension, getElementType, getColor } from "./common";
import { ELEMENTS } from "./constants";

function buildMarkup( params ) {
    const elementType = getElementType( params.element );
    const elementDimension = getDimension( params.dimension );
    const elementColor = getColor( params.color );

    if ( elementType === ELEMENTS.div ) {
        createDiv( elementDimension, elementColor );
    }
}

function createDiv( dimension, color ) {
    const div = document.createElement( "div" );
    div.innerHTML = "This is a test!";
    div.style.width = `${ dimension.width }px`;
    div.style.height = `${ dimension.height }px`;
    div.style.backgroundColor = color;

    document.body.appendChild( div );
}

module.exports = { buildMarkup };
