

import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {LinksComponent} from "../links/links.component";

@Component({
    selector: 'hello',
    template: `
        <div class="hello" id="hello">
            <logo></logo>
            <h1>{{ message }}</h1>
            <links></links>
        </div>
    `,
    entryComponents: [ LogoComponent, LinksComponent ]
})
export class HelloComponent{

    message: string = 'Hello World!';

    constructor(){}

}