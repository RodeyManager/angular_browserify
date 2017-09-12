
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { App } from '../config/app-config';

@Injectable()
export class TestService{

    url: string = App.getWebServiceUrl('test');

    constructor(private http: Http){}

    getData(){
        return this.http.post(this.url, {  })
            .toPromise()
            .then(res => res.json())
            .catch(this.handlerError);
    }

    handlerError(err){
        console.log(err);
    }

}