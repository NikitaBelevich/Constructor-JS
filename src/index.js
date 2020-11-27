'use strict';

import {model} from './js/modules/_model';
import {creators} from './js/modules/_creators';

import './scss/main-style.scss'; // SCSS


const $site = document.querySelector('#site');
model.forEach(block => {
    
    const creatorHTML = creators[block.type];

    $site.insertAdjacentHTML('beforeend', creatorHTML(block.value));
});


