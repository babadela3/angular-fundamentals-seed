import { Http, Response, Headers, RequestOptions } from "@angular/http"; 
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passanger } from "./containers/models/passanger.interface";

@Injectable()
export class PassangerDashboardService {
    constructor(private http: Http) {
        console.log(http);
    }

    getPassangers(): Promise<Passanger[]>{
        return this.http.get('/api/passangers')
            .toPromise()
            .then((response : Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    getPassanger(id: number): Promise<Passanger>{
        return this.http.get(`${'/api/passangers'}/${id}`)
            .toPromise()
            .then((response : Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    updatePassanger(passanger: Passanger): Observable<Passanger>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers : headers
        });
        return this.http.put(`${'/api/passangers'}/${passanger.id}`, passanger, options)
            .map((response : Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    deletePassanger(passanger: Passanger): Observable<Passanger>{
        return this.http.delete(`${'/api/passangers'}/${passanger.id}`)
            .map((response : Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}