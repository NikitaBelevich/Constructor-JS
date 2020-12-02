'use strict';

import './scss/main-style.scss'; // SCSS
import {model} from './js/modules/_model';
import {Site} from './js/classes/site';
import { Sidebar } from './js/classes/sidebar';

const site = new Site('#site');
site.render(model);

const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
}

const sidebar = new Sidebar('#panel', updateCallback);
sidebar.init();

