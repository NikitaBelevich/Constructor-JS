'use strict';

export function row(content, styles = '') {
    const $row = document.createElement('div');
    $row.className = `row ${styles}`;
    $row.innerHTML = content;
    return $row.outerHTML;
}

export function col(content, styles = '') {
    const $col = document.createElement('div');
    $col.className = `col-sm ${styles}`;
    $col.innerHTML = content;
    return $col.outerHTML;
}