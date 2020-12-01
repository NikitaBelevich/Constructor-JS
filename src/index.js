'use strict';

import './scss/main-style.scss'; // SCSS
import {model} from './js/modules/_model';
import {Site} from './js/classes/site';

const site = new Site('#site');
site.render(model);
