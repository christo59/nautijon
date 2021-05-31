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
    private _selectedAnime:Anime = new Anime();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;
    private _isFiltering:boolean = false;

    private _selectAnimeModalName: string = "selectAnimeModal";
    private _addAnimeModalName: string = "addAnimeModal";


    constructor(private _animeService: AnimeService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._animeService.getAnimeList().subscribe(
            res => this._animeList = res
        )
    }

    openModal(modal: string, password?:string):void {
        if( password == "abc" || password == undefined){
            this._modalService.open(modal);
            this._isSettingPassword = false;
        }
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
        if (!isNaN(Number(score))) {
            this._animeService.addScoreAnime(score, this._selectedAnime).subscribe(
                res => {
                    this._animeList.find(anime => this._selectedAnime === anime).note = res;
                    this._isMarking = false;
                }
            );
        }
    }

    orderBy(type:string): void {
        this._animeList.sort((a,b) => {
            if(isNaN(a[type])) {
                return a[type].toLowerCase() < b[type].toLowerCase() ? 1:-1
            } else {
                return Number(a[type]) < Number(b[type]) ? 1:-1
            }
        });
    }

    filterBy(type:string, contain:string) : void {
        this._animeList = this._animeList.filter( anime => anime[type].includes(contain.toLowerCase()))
    }

    resetFilter():void {
        this._animeService.getAnimeList().subscribe(
            res => {
                this._animeList = res;
                this._isFiltering = false;
            }
        )
    }

}
