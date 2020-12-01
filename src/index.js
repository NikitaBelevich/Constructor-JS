'use strict';

import './scss/main-style.scss'; // SCSS


import {model} from './js/modules/_model';


const $site = document.querySelector('#site');
model.forEach(block => {
    console.log(block);
    $site.insertAdjacentHTML('beforeend', block.toHTML());
});

