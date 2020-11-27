'use strict';

const model = [
    {type: 'title', value: 'Hello from JS!'},
    {type: 'text', value: 'a few text'},
    {type: 'columns', value: [
        '111',
        '222',
        '333',
        '444'
    ]},
];

const $site = document.querySelector('#site');
model.forEach(block => {
    let htmlCode = '';
    if (block.type == 'title') {
        htmlCode = createTitle(block.value);
    } else if (block.type == 'text') {
        htmlCode = createText(block.value);
    } else if (block.type == 'columns') {
        htmlCode = createColumns(block.value);
    }

    $site.insertAdjacentHTML('beforeend', htmlCode);
});


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