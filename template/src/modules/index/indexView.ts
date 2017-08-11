///<reference path="../../../node_modules/@angular/typescript/lib/lib.es6.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {IndexModule} from "./index.module";
import {enableProdMode} from "@angular/core";
import {App} from "../../config/app-config";
if(App.env === 'prd'){
    enableProdMode();
}
console.log(App);
platformBrowserDynamic().bootstrapModule(IndexModule);






