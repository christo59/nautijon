import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
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
        return this._http.post("/film",film)
    }

}
