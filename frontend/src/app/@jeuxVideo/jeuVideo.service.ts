import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JeuVideo} from "./beans/JeuVideo";
import {Anime} from "../@anime/beans/Anime";

@Injectable()
export class JeuVideoService {

    constructor(
        private _http: HttpClient) {}

    public getVideoGameList(): Observable<JeuVideo[]>{
        return this._http.get<JeuVideo[]>("/jeuxVideos");
    }

    public addVideoGame(jeuVideo: JeuVideo): Observable<JeuVideo>{
        return this._http.post<JeuVideo>("/jeuVideo/add",jeuVideo)
    }
    public addScoreJeuVideo(score:string, jeuVideo: JeuVideo): Observable<number>{
        const headers = new HttpHeaders().set("score",score);
        return this._http.post<number>("/jeuVideo/score/add",jeuVideo,{headers});
    }

}
