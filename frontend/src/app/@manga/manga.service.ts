import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manga} from "./beans/Manga";

@Injectable()
export class MangaService {

    constructor(
        private _http: HttpClient) {}

    public getMangaList(): Observable<Manga[]>{
        return this._http.get<Manga[]>("/mangas");
    }

}
