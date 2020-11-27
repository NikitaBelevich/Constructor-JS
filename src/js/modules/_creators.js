'use strict';

export function createTitle(textValue) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${textValue}</h1>
            </div>
        </div>
    `;
}

export function createText(textValue) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${textValue}</p>
            </div>
        </div>
    `;
}

export function createColumns(value) {
    const columns = value.map(elem => {
        return `<div class="col-sm">${elem}</div>`;
    });
    return `
        <div class="row">
            ${columns.join('')}
        </div>
    `;
}

export function createImage(src) {
    return `
        <div class="row">
            <img src="${src}">
        </div>
    `;
}
