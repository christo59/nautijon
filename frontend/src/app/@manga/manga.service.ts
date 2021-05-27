import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manga} from "./beans/Manga";
import {Anime} from "../@anime/beans/Anime";

@Injectable()
export class MangaService {

    constructor(
        private _http: HttpClient) {}

    public getMangaList(): Observable<Manga[]>{
        return this._http.get<Manga[]>("/mangas");
    }

    public addManga(manga: Manga): Observable<Manga>{
        return this._http.post<Manga>("/manga",manga)
    }

}
