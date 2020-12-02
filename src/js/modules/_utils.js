'use strict';

export function row(content, styles = '') {
    const $row = document.createElement('div');
    // Проверяем, если есть : в строке, значит это строка свойств CSS, её мы должны добавить в style!
    // Иначе, добавляем класс со стилями CSS
    if (styles.includes(':')) {
        $row.classList.add('row');
        $row.style = styles.trim();
        $row.innerHTML = content;
    } else {
        $row.className = `row ${styles}`;
        $row.innerHTML = content;
    }
    return $row.outerHTML;
}

export function col(content, styles = '') {
    const $col = document.createElement('div');
    $col.className = `col-sm ${styles}`;
    $col.innerHTML = content;
    return $col.outerHTML;
}

export function block(type) {
    return `
    <form name="${type}" class="sidebar__form-for-adding-elements sidebar__form-for-adding-elements_hide">
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