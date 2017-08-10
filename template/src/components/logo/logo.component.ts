
import { Component } from '@angular/core';

@Component({
    selector: 'logo',
    template: '<img src="{{ src }}" alt="" />'
})
export class LogoComponent{
    src: string = '../assets/images/logo.png';
}