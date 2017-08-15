
import {NgModule, enableProdMode} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "../../components/mb/login/login.component";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {App} from "../../config/app-config";
import {TestService} from "../../services/test.service";


@NgModule({
    imports: [ BrowserModule, HttpModule],
    declarations: [ LoginComponent ],
    providers: [ TestService ],
    bootstrap: [ LoginComponent ]
})
export class LoginModule{
    constructor(private testService: TestService){
        testService.getData().then(res => {
            console.log(res);
        });
    }
}

if(App.env === 'prd'){
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(LoginModule);
