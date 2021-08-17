// import { Apply } from './apply.model';
// import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/';

@Injectable({ providedIn: 'root'})
export class ApplyService {

    constructor(private http: HttpClient) {}

    apply(body: any) {
        return this.http.post(baseUrl + 'apply', body)
    }
}