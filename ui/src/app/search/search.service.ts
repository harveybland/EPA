import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root' })
export class ApprenticeshipService {
    constructor(private http: HttpClient) {}

    getApprenticeships(): Observable<any> {
        return this.http.get(baseUrl + 'apprenticeships')
    }
}