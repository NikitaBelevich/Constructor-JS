'use strict';

import {col, row} from '../modules/_utils';

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован!');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'h1', cssClassStyles, styles: stylesInStyle} = this.options;
        const availableStyles = cssClassStyles ?? stylesInStyle;
        return row(col(`<${tag}>${this.value}</${tag}>`), availableStyles);
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {alt, imageStyles, parentColPadding, styles: stylesInStyle} = this.options;
        return row(col(`<img src="${this.value}" alt="${alt}" class="${imageStyles}">`, parentColPadding));
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'p', cssClassStyles, styles: stylesInStyle} = this.options;
        // Получаем стили которые имеются, либо это класс из CSS, либо строка свойств CSS, либо то, либо другое
        const availableStyles = cssClassStyles ?? stylesInStyle;
        return row(col(`<${tag}>${this.value}</${tag}>`), availableStyles);
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'p', cssClassStyles, styles: stylesInStyle} = this.options;
        const columns = this.value.map(elem => col(`<${tag}>${elem}</${tag}>`, cssClassStyles));
        return row(columns.join(''));
    }
}
