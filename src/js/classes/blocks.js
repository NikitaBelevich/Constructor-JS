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
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), styles);
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {alt, imageStyles, parentColPadding} = this.options;
        return row(col(`<img src="${this.value}" alt="${alt}" class="${imageStyles}">`, parentColPadding));
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'p', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), styles);
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'p', styles} = this.options;
        const columns = this.value.map(elem => col(`<${tag}>${elem}</${tag}>`, styles));
        return row(columns.join(''));
    }
}
