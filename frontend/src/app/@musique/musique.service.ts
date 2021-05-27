import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Musique} from "./beans/Musique";
import {Anime} from "../@anime/beans/Anime";

@Injectable()
export class MusiqueService {

    constructor(
        private _http: HttpClient) {}

    public getMusicList(): Observable<Musique[]>{
        return this._http.get<Musique[]>("/musiques");
    }

    public addMusic(musique: Musique): Observable<Musique>{
        return this._http.post<Musique>("/musique",musique)
    }

}
