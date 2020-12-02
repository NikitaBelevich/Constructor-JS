'use strict';

import { block } from "../modules/_utils";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;
        this.$openBtn = this.createOpenBtn();
        this.$closeBtn = this.createClosenBtn();
    }

    init() {
        this.$el.before(this.$openBtn); // Вставляем кнопку открытия меню в DOM 
        this.$openBtn.addEventListener('click', this.openSidebar.bind(this)); // Навесили на неё обработчик открытия
        this.$el.prepend(this.$closeBtn);// Вставляем кнопку закрытия в начало меню в DOM 
        this.$closeBtn.addEventListener('click', this.closeSidebar.bind(this)); // Навесили на неё обработчик закрытия
        this.$el.insertAdjacentHTML('beforeend', this.template);
        this.$el.addEventListener('submit', this.add.bind(this));
    }

    get template() {
        return [
            block('Text'),
            block('Title')
        ].join('');
    }

    add(event) {
        event.preventDefault();
        const target = event.target;
        const type = target.name;
        const value = target.elements[0].value;
        const styles = target.elements[1].value;

        let newBlock;
        if (type === 'Text') {
            newBlock = new TextBlock(value, {styles: styles});
        } else {
            newBlock = new TitleBlock(value, {styles: styles});
        }

        this.update(newBlock);

        // Чистка формы
        Array.from(target.elements).forEach(elem => {elem.value = '';});
    }

    createOpenBtn() {
        const btn = document.createElement('div');
        btn.classList.add('btn-open-nav');
        btn.id = 'openNav';
        btn.textContent = '☰';
        return btn;
    }
    createClosenBtn() {
        const btn = document.createElement('div');
        btn.classList.add('closebtn');
        btn.id = 'closeNav';
        btn.innerHTML = '&times;';
        return btn;
    }
    openSidebar() {
        const forms = document.querySelectorAll('.sidebar__form-for-adding-elements');
        forms.forEach(form => {this.hideForm(form, 200);});
        this.$el.classList.toggle('sidebar-active');
    }
    closeSidebar() {
        const forms = document.querySelectorAll('.sidebar__form-for-adding-elements');
        forms.forEach(form => {this.hideForm(form, 100);});
        this.$el.classList.toggle('sidebar-active');
    }
    hideForm(form, delay) {
        setTimeout(() => {
            form.classList.toggle('sidebar__form-for-adding-elements_hide');
        }, delay);
    }
}

