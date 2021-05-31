import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./beans/Film";
import {Anime} from "../@anime/beans/Anime";

@Injectable()
export class FilmService {

    constructor(
        private _http: HttpClient) {}

    public getFilmList(): Observable<Film[]>{
        return this._http.get<Film[]>("/films");
    }

    public addFilm(film: Film): Observable<Film>{
        return this._http.post<Film>("/film/add",film)
    }
    public addScoreFilm(score:string, film: Film): Observable<number>{
        const headers = new HttpHeaders().set("score",score);
        return this._http.post<number>("/film/score/add",film,{headers});
    }

}
