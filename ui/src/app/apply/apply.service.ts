import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root'})
export class ApplyService {

    constructor(private http: HttpClient) {}

    apply(body: any) {
        return this.http.post(baseUrl + 'contact', body)
    }
}