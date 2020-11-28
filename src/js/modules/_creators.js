'use strict';

import {col, row} from './_utils';

function createTitle(block) {
    const {tag = 'h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function createText(block) {
    const {tag = 'p', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function createColumns(block) {
    const {tag = 'p', styles} = block.options;
    const columns = block.value.map(elem => col(`<${tag}>${elem}</${tag}>`, styles));
    return row(columns.join(''));
}

function createImage(block) {
    const {alt, imageStyles, parentColPadding} = block.options;
   
    return row(col(`<img src="${block.value}" alt="${alt}" class="${imageStyles}">`, parentColPadding));
}

export const creators = {
    'title': createTitle,
    'text': createText,
    'columns': createColumns,
    'image': createImage,
};