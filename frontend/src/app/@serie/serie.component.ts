import {Component,OnInit} from "@angular/core";
import {Serie} from "./beans/Serie";
import {SerieService} from "./serie.service";
import {ModalService} from "../@modal/modal.service";
import {Anime} from "../@anime/beans/Anime";

@Component({
    selector: 'musique',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.css' ]
})
export class SerieComponent {

    private _serieList: Serie[] = [];
    private _newSerie:Serie = new Serie();
    private _selectedSerie:Serie = new Serie();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;
    private _isFiltering:boolean = false;

    private _selectSerieModalName: string = "selectSerieModal";
    private _addSerieModalName: string = "addSerieModal";

    constructor(private _serieService: SerieService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._serieService.getSerieList().subscribe(
            res => this._serieList = res
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
        this._newSerie = new Serie();
    }

    addSerie():void {
        this._newSerie.note=0.0;
        this._newSerie.imagePath="";
        this._serieService.addSerie(this._newSerie).subscribe(
            res => {
                this._serieList.push(res);
                this.resetData(this._addSerieModalName);
            }
        )
    }
    selectSerie(modal:string, serie:Serie ):void {
        this._modalService.open(modal);
        this._selectedSerie = serie;
    }

    addScore(score:string): void {
        if (!isNaN(Number(score))) {
            this._serieService.addScoreSerie(score, this._selectedSerie).subscribe(
                res => {
                    this._serieList.find(serie => this._selectedSerie === serie).note = res;
                    this._isMarking = false;
                }
            );
        }
    }

    orderBy(type:string): void {
        this._serieList.sort((a,b) => {
            if(isNaN(a[type])) {
                return a[type].toLowerCase() < b[type].toLowerCase() ? 1:-1
            } else {
                return Number(a[type]) < Number(b[type]) ? 1:-1
            }
        });
    }

    filterBy(type:string, contain:string) : void {
        this._serieList = this._serieList.filter( anime => anime[type].includes(contain.toLowerCase()))
    }

    resetFilter():void {
        this._serieService.getSerieList().subscribe(
            res => {
                this._serieList = res;
                this._isFiltering = false;
            }
        )
    }

}
