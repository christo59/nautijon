import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JeuxVideo} from "./beans/JeuxVideo";

@Injectable()
export class JeuVideoService {

    constructor(
        private _http: HttpClient) {}

    public getVideoGameList(): Observable<JeuxVideo[]>{
        return this._http.get<JeuxVideo[]>("/jeuxVideos");
    }

}
