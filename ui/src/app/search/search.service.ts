import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root' })
export class ApprenticeshipService {
    constructor(private http: HttpClient) {}

    getApprenticeships(model: any): Observable<any> {
        let querystring = '?x=1';

        if(!!model.route){
            querystring += '&route=' + model.route;
        }

        if(!!model.status){
            querystring += '&status=' + model.status;
        }

        if(!!model.level){
            querystring += '&level=' + model.level;
        }
        
        if(!!model.duration){
            querystring += '&duration=' + model.duration;
        }

        return this.http.get(baseUrl + 'apprenticeships' + querystring)
    }
}