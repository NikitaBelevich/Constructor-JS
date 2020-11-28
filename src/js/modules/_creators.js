'use strict';

import {col, row} from './_utils';

function createTitle(block) {
    return row(col(`<h1>${block.value}</h1>`));
}

function createText(block) {
    return row(col(`<p>${block.value}</p>`));
}

function createColumns(block) {
    const columns = block.value.map(elem => col(elem));
    return row(columns.join(''));
}

function createImage(block) {
    return row(`<img src="${block.value}">`);
}

export const creators = {
    'title': createTitle,
    'text': createText,
    'columns': createColumns,
    'image': createImage,
};