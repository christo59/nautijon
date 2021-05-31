import {Component, OnInit} from "@angular/core";
import {Film} from "./beans/Film";
import {FilmService} from "./film.service";
import {ModalService} from "../@modal/modal.service";
import {Anime} from "../@anime/beans/Anime";

@Component({
    selector: 'musique',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css' ]
})
export class FilmComponent {

    private _filmList: Film[] = [];
    private _newFilm:Film = new Film();
    private _selectedFilm:Film = new Film();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;
    private _isFiltering:boolean = false;

    private _selectFilmModalName: string = "selectFilmModal";
    private _addFilmModalName: string = "addFilmModal";

    constructor(private _filmService: FilmService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._filmService.getFilmList().subscribe(
            res => this._filmList = res
        )
    }

    openModal(modal: string, password?:string):void{
        if( password == "abc" || password == undefined){
            this._modalService.open(modal);
            this._isSettingPassword = false;
        }
    }

    resetData(modal):void{
        this._modalService.close(modal);
        this._newFilm=new Film();
        this._selectedFilm = new Film();
    }

    addFilm():void{
        this._newFilm.note=0.0;
        this._newFilm.imagePath="";
        this._filmService.addFilm(this._newFilm).subscribe(
            res => {
                this._filmList.push(res);
                this.resetData(this._addFilmModalName);
            }
        )
    }
    selectFilm(modal:string, film:Film ):void {
        this._modalService.open(modal);
        this._selectedFilm =film;
    }
    addScore(score:string): void {
        if (!isNaN(Number(score))) {
            this._filmService.addScoreFilm(score, this._selectedFilm).subscribe(
                res => {
                    this._filmList.find(anime => this._selectedFilm === anime).note = res;
                    this._isMarking = false;
                }
            );
        }
    }

    orderBy(type:string): void {
        this._filmList.sort((a,b) => {
            if(isNaN(a[type])) {
                return a[type].toLowerCase() < b[type].toLowerCase() ? 1:-1
            } else {
                return Number(a[type]) < Number(b[type]) ? 1:-1
            }
        });
    }

    filterBy(type:string, contain:string) : void {
        this._filmList = this._filmList.filter( anime => anime[type].includes(contain.toLowerCase()))
    }

    resetFilter():void {
        this._filmService.getFilmList().subscribe(
            res => {
                this._filmList = res;
                this._isFiltering = false;
            }
        )
    }


}
