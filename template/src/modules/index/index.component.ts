import { Component, OnInit } from "@angular/core";
import { TestService } from "../../services/test.service";

@Component({
    selector: 'index-view',
    template: `<hello></hello>`
})
export class IndexComponent implements OnInit {

    constructor(private testService: TestService) {
    }

    ngOnInit() {

        this.testService.getData().then(res => {
            console.log(res);
        });

    }

}