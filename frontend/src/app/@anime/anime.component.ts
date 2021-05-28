import {Component,OnInit} from "@angular/core";
import {Anime} from "./beans/Anime";
import {AnimeService} from "./anime.service";
import {ModalService} from "../@modal/modal.service";

@Component({
    selector: 'anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css' ]
})
export class AnimeComponent {

    private _animeList: Anime[] = [];
    private _newAnime:Anime = new Anime();

    constructor(private _animeService: AnimeService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._animeService.getAnimeList().subscribe(
            res => this._animeList = res
        )
    }

    ajoutAnimeModal(modal):void {
        this._modalService.open(modal);
    }

    resetData(modal):void {
        this._modalService.close(modal);
        this._newAnime = new Anime();
    }

    addAnime():void {
        this._newAnime.note=0.0;
        this._newAnime.imagePath="";
        this._animeService.addAnime(this._newAnime).subscribe(
            res => {
                this._animeList.push(res);
                this.resetData("addAnimeModal");
            }
        )
    }
}
