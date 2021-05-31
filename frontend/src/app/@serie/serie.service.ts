import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serie} from "./beans/Serie";
import {Anime} from "../@anime/beans/Anime";
import {Musique} from "../@musique/beans/Musique";

@Injectable()
export class SerieService {

    constructor(
        private _http: HttpClient) {}

    public getSerieList(): Observable<Serie[]>{
        return this._http.get<Serie[]>("/series");
    }

    public addSerie(serie: Serie): Observable<Serie>{
        return this._http.post<Serie>("/serie/add",serie)
    }
    public addScoreSerie(score:string, serie: Serie): Observable<number>{
        const headers = new HttpHeaders().set("score",score);
        return this._http.post<number>("/serie/score/add",serie,{headers});
    }

}
