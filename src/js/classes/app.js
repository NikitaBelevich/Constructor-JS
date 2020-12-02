'use strict';

import { Sidebar } from "./sidebar";
import { Site } from "./site";

export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        const site = new Site('#site');
        site.render(this.model);

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        }

        const sidebar = new Sidebar('#panel', updateCallback);
        sidebar.init();
    }
}