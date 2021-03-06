
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IndexModule } from "./index.module";
import { enableProdMode } from "@angular/core";
import { App } from "../../config/app-config";

if (App.env === 'prd') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(IndexModule);





