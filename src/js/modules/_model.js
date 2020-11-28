'use strict';

import img1 from '../../img/img1.png'

export const model = [
    {type: 'title', value: 'Hello from JS!', options: {
        tag: 'h2',
    }},
    {type: 'text', value: 'a few text'},
    {type: 'columns', value: [
        '111',
        '222',
        '333',
        '444',
        '555'
    ]},
    {type: 'image', value: img1},
];
