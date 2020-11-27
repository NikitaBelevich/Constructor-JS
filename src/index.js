'use strict';

import {model} from './js/modules/_model';
import {createTitle, createText, createColumns, createImage} from './js/modules/_creators';

import './scss/main-style.scss'; // SCSS


const $site = document.querySelector('#site');
model.forEach(block => {
    let htmlCode = '';
    if (block.type == 'title') {
        htmlCode = createTitle(block.value);
    } else if (block.type == 'text') {
        htmlCode = createText(block.value);
    } else if (block.type == 'columns') {
        htmlCode = createColumns(block.value);
    } else if (block.type == 'image') {
        htmlCode = createImage(block.value);
    }

    $site.insertAdjacentHTML('beforeend', htmlCode);
});


