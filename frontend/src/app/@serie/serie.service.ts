import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serie} from "./beans/Serie";

@Injectable()
export class SerieService {

    constructor(
        private _http: HttpClient) {}

    public getSerieList(): Observable<Serie[]>{
        return this._http.get<Serie[]>("/series");
    }

    public addSerie(serie: Serie): Observable<Serie>{
        return this._http.post<Serie>("/serie",serie)
    }

}
