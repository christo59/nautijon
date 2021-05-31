import {Component,OnInit} from "@angular/core";
import {ModalService} from "../@modal/modal.service";
import {MangaService} from "./manga.service";
import {Manga} from "./beans/Manga";
import {Anime} from "../@anime/beans/Anime";

@Component({
    selector: 'manga',
    templateUrl: './manga.component.html',
    styleUrls: ['./manga.component.css' ]
})
export class MangaComponent {

    private _mangaList: Manga[];
    private _newManga:Manga = new Manga();
    private _selectedManga:Manga = new Manga();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;
    private _isFiltering:boolean = false;

    private _selectMangaModalName: string = "selectMangaModal";
    private _addMangaModalName: string = "addMangaModal";

    constructor(private _mangaService: MangaService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._mangaService.getMangaList().subscribe(
            res => this._mangaList = res
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
        this._newManga = new Manga();
        this._selectedManga = new Manga();
    }

    addManga():void {
        this._newManga .note=0.0;
        this._newManga .imagePath="";
        this._mangaService.addManga(this._newManga ).subscribe(
            res => {
                this._mangaList.push(res);
                this.resetData(this._addMangaModalName);
            }
        )
    }

    selectManga(modal:string, manga:Manga ):void {
        this._modalService.open(modal);
        this._selectedManga = manga;
    }

    addScore(score:string): void {
        if (!isNaN(Number(score))) {
            this._mangaService.addScoreManga(score, this._selectedManga).subscribe(
                res => {
                    this._mangaList.find(manga => this._selectedManga === manga).note = res;
                    this._isMarking = false;
                }
            );
        }
    }

    orderBy(type:string): void {
        this._mangaList.sort((a,b) => {
            if(isNaN(a[type])) {
                return a[type].toLowerCase() < b[type].toLowerCase() ? 1:-1
            } else {
                return Number(a[type]) < Number(b[type]) ? 1:-1
            }
        });
    }

    filterBy(type:string, contain:string) : void {
        this._mangaList = this._mangaList.filter( anime => anime[type].includes(contain.toLowerCase()))
    }

    resetFilter():void {
        this._mangaService.getMangaList().subscribe(
            res => {
                this._mangaList = res;
                this._isFiltering = false;
            }
        )
    }
}
