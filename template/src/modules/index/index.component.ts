
import {Component, OnInit} from "@angular/core";
import {AppService} from "../../serivces/app.service";
import {HelloComponent} from "../../components/hello/hello.component";

@Component({
    selector: 'index-view',
    template: `<hello></hello>`,
    entryComponents: [ HelloComponent ]
})
export class IndexComponent implements OnInit{
    constructor(private appService: AppService){}

    ngOnInit(){

        this.appService.test().then(res => {
            console.log(res);
        });

    }
}