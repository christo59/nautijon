import {Component} from "@angular/core";
import {Film} from "../@film/beans/Film";
import {FilmService} from "../@film/film.service";
import {Anime} from "../@anime/beans/Anime";
import {JeuVideo} from "../@jeuxVideo/beans/JeuVideo";
import {Manga} from "../@manga/beans/Manga";
import {Musique} from "../@musique/beans/Musique";
import {Serie} from "../@serie/beans/Serie";
import {AnimeService} from "../@anime/anime.service";
import {JeuVideoService} from "../@jeuxVideo/jeuVideo.service";
import {MangaService} from "../@manga/manga.service";
import {MusiqueService} from "../@musique/musique.service";
import {SerieService} from "../@serie/serie.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css' ]
})

/** Composant qui represente le header du site */
export class HomeComponent {

    private _animeList: Anime[];
    private _filmList: Film[];
    private _videoGameList: JeuVideo[];
    private _mangaList: Manga[];
    private _musicList: Musique[];
    private _serieList: Serie[];

    constructor(private _animeService: AnimeService,
                private _filmService: FilmService,
                private _jeuVideoService: JeuVideoService,
                private _mangaService: MangaService,
                private _musiqueService: MusiqueService,
                private _serieService: SerieService) {}

    ngOnInit(): void {
        this._animeService.getAnimeList().subscribe(
            res => this._animeList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
        this._filmService.getFilmList().subscribe(
            res => this._filmList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
        this._jeuVideoService.getVideoGameList().subscribe(
            res => this._videoGameList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
        this._mangaService.getMangaList().subscribe(
            res => this._mangaList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
        this._musiqueService.getMusicList().subscribe(
            res => this._musicList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
        this._serieService.getSerieList().subscribe(
            res => this._serieList = res.sort((a,b) => a.note < b.note? 1:-1)
        );
    }
}
