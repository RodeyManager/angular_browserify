

import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
        <div class="hello" id="hello">
            <logo></logo>
            <h1>{{ message }}</h1>
            <links></links>
        </div>
    `
})
export class HelloComponent{

    message: string = 'Hello World!';

    constructor(){}

}