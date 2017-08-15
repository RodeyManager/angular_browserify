
import {Component, OnInit} from "@angular/core";
import {TestService} from "../../services/test.service";
import {HelloComponent} from "../../components/hello/hello.component";

@Component({
    selector: 'index-view',
    template: `<hello></hello>`,
    entryComponents: [ HelloComponent ]
})
export class IndexComponent implements OnInit{
    constructor(private testService: TestService){}

    ngOnInit(){

        this.testService.getData().then(res => {
            console.log(res);
        });

    }
}