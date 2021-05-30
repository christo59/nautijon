import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Anime} from "./beans/Anime";

@Injectable()
export class AnimeService {

    constructor(
        private _http: HttpClient) {}

    public getAnimeList(): Observable<Anime[]>{
        return this._http.get<Anime[]>("/animes");
    }

    public addAnime(anime: Anime): Observable<Anime>{
        return this._http.post<Anime>("/anime/add",anime)
    }

    public addScoreAnime(score:string, anime: Anime): Observable<number>{
        const headers = new HttpHeaders().set("score",score);
        return this._http.post<number>("/anime/score/add",anime,{headers});
    }

}
