
import {NgModule} from "@angular/core";
import {HelloComponent} from "../../components/hello/hello.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppService} from "../../serivces/app.service";
import {IndexComponent} from "./index.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {LinksComponent} from "../../components/links/links.component";

@NgModule({
    imports: [ BrowserModule, HttpModule],
    declarations: [ LogoComponent, LinksComponent, HelloComponent, IndexComponent ],
    providers: [ AppService ],
    bootstrap: [ IndexComponent ]
})
export class IndexModule{}