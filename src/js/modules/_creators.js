'use strict';

function createTitle(textValue) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${textValue}</h1>
            </div>
        </div>
    `;
}

function createText(textValue) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${textValue}</p>
            </div>
        </div>
    `;
}

function createColumns(value) {
    const columns = value.map(elem => {
        return `<div class="col-sm">${elem}</div>`;
    });
    return `
        <div class="row">
            ${columns.join('')}
        </div>
    `;
}

function createImage(src) {
    return `
        <div class="row">
            <img src="${src}">
        </div>
    `;
}

export const creators = {
    'title': createTitle,
    'text': createText,
    'columns': createColumns,
    'image': createImage,
};