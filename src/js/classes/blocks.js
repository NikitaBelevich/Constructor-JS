'use strict';

export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options);
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }
}
