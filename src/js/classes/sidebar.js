'use strict';

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('');
    }
}

export function block(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">To Add</button>
    </form>
    <hr>
    `;
}