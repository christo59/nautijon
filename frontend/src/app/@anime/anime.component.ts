import {Component,OnInit} from "@angular/core";
import {Anime} from "./beans/Anime";
import {AnimeService} from "./anime.service";
import {ModalService} from "../@modal/modal.service";
import {isNumber} from "util";
import {NoticeHelper} from "../notice.helper";

@Component({
    selector: 'anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css' ]
})
export class AnimeComponent {

    private _animeList: Anime[] = [];
    private _newAnime:Anime = new Anime();
    private _selectedAnime:Anime = new Anime();

    private _selectAnimeModalName: string = "selectAnimeModal";
    private _addAnimeModalName: string = "addAnimeModal";
    private _addScoreModalName: string = "addScoreModal";

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
        this._selectedAnime = new Anime();
    }

    addAnime():void {
        this._newAnime.note=0.0;
        this._newAnime.imagePath="";
        this._animeService.addAnime(this._newAnime).subscribe(
            res => {
                this._animeList.push(res);
                this.resetData(this._addAnimeModalName);
            }
        )
    }

    selectAnime(modal:string, anime:Anime ):void {
        this._modalService.open(modal);
        this._selectedAnime = anime;
    }

    addScore(score:string): void {
        if (isNumber(score)) {
            this._animeService.addScoreAnime(score, this._selectedAnime).subscribe(
                res => {
                    this._animeList.find(anime => this._selectedAnime === anime).note = res;
                    this._modalService.close(this._addScoreModalName)
                }
            );
        } else {
            this._isMarking = false;
            NoticeHelper.write_notice("La note saisie n'est pas un nombre", "error");
        }
    }
}
