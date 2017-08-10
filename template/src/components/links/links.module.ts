import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LinksComponent } from './links.component';

@NgModule({
    declarations: [
        LinksComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [  ],
    bootstrap: [ LinksComponent ]
})
export class LinksModule { }