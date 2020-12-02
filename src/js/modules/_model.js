'use strict';

import img1 from '../../img/parcel.png'
import {
    TitleBlock,
    TextBlock,
    ImageBlock,
    ColumnsBlock,
} from '../classes/blocks';

export const model = [
    new TitleBlock('Конструктор сайта (компонентный подход на чистом JS)', {
        tag: 'h2',
        cssClassStyles: 'header-title-row',
    }),
    new ImageBlock(img1, {
        imageStyles: 'parcel-img',
        parentColPadding: 'pl-0 pr-0',
        alt: 'Parcel'
    }),
    new TextBlock('Компонентный подход к разработке с использованием Parcel.', {
        tag: 'p',
        cssClassStyles: 'project-description',
    }),
    new ColumnsBlock([
        'Column 1',
        'Column 2',
        'Column 3',
        'Column 4',
    ], {
        tag: 'p',
        cssClassStyles: 'product-col',
    }),
    
];
