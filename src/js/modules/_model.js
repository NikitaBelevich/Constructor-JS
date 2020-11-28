'use strict';

import img1 from '../../img/parcel.png'

export const model = [
    {type: 'title', value: 'Конструктор сайта (компонентный подход на чистом JS)', options: {
        tag: 'h2',
        styles: 'header-title-row',
    }},
    {type: 'image', value: img1, options: {
        imageStyles: 'parcel-img',
        parentColPadding: 'pl-0 pr-0',
        alt: 'Parcel'
    }},
    {type: 'text', value: 'Компонентный подход к разработке с использованием Parcel.', options: {
        tag: 'p',
        styles: 'project-description',
    }},
    {type: 'columns', value: [
        'Column 1',
        'Column 2',
        'Column 3',
        'Column 4',
    ], options: {
        tag: 'p',
        styles: 'product-col',
    }},
    
];
