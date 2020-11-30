'use strict';

import './scss/main-style.scss'; // SCSS


import {model} from './js/modules/_model';
import {creators} from './js/modules/_creators';
import {Block} from './js/classes/blocks';


const $site = document.querySelector('#site');
model.forEach(block => {
    
    const creatorHTML = creators[block.type];
    if (creatorHTML) {
       $site.insertAdjacentHTML('beforeend', creatorHTML(block)); 
    }
    
});

