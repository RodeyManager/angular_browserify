

import { Component, Input } from '@angular/core';

@Component({
    selector: 'links',
    template: `
        <div class="links" data-name="[name]" data-test="data">
            <a href="" target="_blank" class="doc">文档</a>
            <a href="javascript:void(0)" id="case" (click)="onShowCase()">教程</a>
            <a href="https://github.com/RodeyManager/gupack" target="_blank" class="fa fa-github">GitHub</a>
            <ul class="case" *ngIf="toggleCase">
                <li><a href="https://github.com/RodeyManager/gupack_simple" target="_blank">ES6 + jQuery</a></li>
                <li><a href="https://github.com/RodeyManager/vue_browserify" target="_blank">ES6 + Vue + Browserify</a></li>
                <li><a href="https://github.com/RodeyManager/react_browserify" target="_blank">ES6 + React + Browserify</a></li>
                <li><a href="https://github.com/RodeyManager/angular_browserify" target="_blank">ES6 + Angular + Browserify</a></li>
            </ul>
        </div>
    `
})
export class LinksComponent{

    toggleCase: boolean = false;

    @Input() name: string;
    @Input() data: string;

    constructor(){
        document.addEventListener('click', this.onDocClick.bind(this), false);
    }

    onDocClick(evt: MouseEvent): void{
        let target = evt.target;
        if(target['id'] !== 'case'){
            this.toggleCase = false;
        }
    }

    onShowCase(): void{
        this.toggleCase = !this.toggleCase;
    }

}