
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {App} from '../config/app-config';

@Injectable()
export class AppService{

    constructor(private http: Http){
        this.init();
    }

    init(){

    }

    test(){
        let url = App.getWebServiceUrl('test');
        return this.http.post(url, { name: 'Angular', password: 'angular' })
            .toPromise()
            .then(res => res.json())
            .catch(AppService.handlerError);
    }

    static handlerError(err){
        console.log(err);
    }

}