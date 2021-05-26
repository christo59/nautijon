import {Component,OnInit} from "@angular/core";
import {Anime} from "./beans/Anime";
import {AnimeService} from "./anime.service";

@Component({
    selector: 'anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css' ]
})
export class AnimeComponent {

    private _animeList: Anime[];

    constructor(private _animeService: AnimeService) {}

    ngOnInit(): void {
        this._animeService.getAnimeList().subscribe(
            res => this._animeList = res
        )
    }

}
