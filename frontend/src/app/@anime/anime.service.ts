import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
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
        return this._http.post("/anime",anime)
    }

}
