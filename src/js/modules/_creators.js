'use strict';

import {col, row} from './_utils';

function createTitle(textValue) {
    return row(col(`<h1>${textValue}</h1>`));
}

function createText(textValue) {
    return row(col(`<p>${textValue}</p>`));
}

function createColumns(value) {
    const columns = value.map(elem => col(elem));
    return row(columns.join(''));
}

function createImage(src) {
    return row(`<img src="${src}">`);
}

export const creators = {
    'title': createTitle,
    'text': createText,
    'columns': createColumns,
    'image': createImage,
};