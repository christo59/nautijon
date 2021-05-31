import {Component,OnInit} from "@angular/core";
import {Musique} from "./beans/Musique";
import {MusiqueService} from "./musique.service";
import {ModalService} from "../@modal/modal.service";

@Component({
    selector: 'musique',
    templateUrl: './musique.component.html',
    styleUrls: ['./musique.component.css' ]
})
export class MusiqueComponent {

    private _musiqueList: Musique[] = [];
    private _newMusique:Musique = new Musique();
    private _selectedMusique:Musique = new Musique();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;
    private _isFiltering:boolean = false;

    private _selectMusiqueModalName: string = "selectMusiqueModal";
    private _addMusiqueModalName: string = "addMusiqueModal";

    constructor(private _musiqueService: MusiqueService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._musiqueService.getMusicList().subscribe(
            res => this._musiqueList = res
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
        this._newMusique = new Musique();
        this._selectedMusique = new Musique();
    }

    addMusique():void {
        this._newMusique.note=0.0;
        this._newMusique.imagePath="";
        this._musiqueService.addMusic(this._newMusique).subscribe(
            res => {
                this._musiqueList.push(res);
                this.resetData(this._addMusiqueModalName);
            }
        )
    }
    selectMusique(modal:string, musique:Musique ):void {
        this._modalService.open(modal);
        this._selectedMusique = musique;
    }

    addScore(score:string): void {
        if (!isNaN(Number(score))) {
            this._musiqueService.addScoreMusique(score, this._selectedMusique).subscribe(
                res => {
                    this._musiqueList.find(musique => this._selectedMusique === musique).note = res;
                    this._isMarking = false;
                }
            );
        }
    }

    orderBy(type:string): void {
        this._musiqueList.sort((a,b) => {
            if(isNaN(a[type])) {
                return a[type].toLowerCase() < b[type].toLowerCase() ? 1:-1
            } else {
                return Number(a[type]) < Number(b[type]) ? 1:-1
            }
        });
    }

    filterBy(type:string, contain:string) : void {
        this._musiqueList = this._musiqueList.filter( anime => anime[type].includes(contain.toLowerCase()))
    }

    resetFilter():void {
        this._musiqueService.getMusicList().subscribe(
            res => {
                this._musiqueList = res;
                this._isFiltering = false;
            }
        )
    }

}
