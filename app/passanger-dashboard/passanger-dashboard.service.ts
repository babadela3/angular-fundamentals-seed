import { Http, Response } from "@angular/http"; 
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Passanger } from "./containers/models/passanger.interface";

@Injectable()
export class PassangerDashboardService {
    constructor(private http: Http) {
        console.log(http);
    }

    getPassangers(): Observable<Passanger[]>{
        return this.http.get('/api/passangers')
            .map((response : Response) => response.json());
    }

    updatePassanger(passanger: Passanger): Observable<Passanger>{
        return this.http.put(`${'/api/passangers'}/${passanger.id}`, passanger)
            .map((response : Response) => response.json());
    }

    deletePassanger(passanger: Passanger): Observable<Passanger>{
        return this.http.delete(`${'/api/passangers'}/${passanger.id}`)
            .map((response : Response) => response.json());
    }
}