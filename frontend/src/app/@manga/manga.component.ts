import {Component,OnInit} from "@angular/core";
import {ModalService} from "../@modal/modal.service";
import {MangaService} from "./manga.service";
import {Manga} from "./beans/Manga";

@Component({
    selector: 'manga',
    templateUrl: './manga.component.html',
    styleUrls: ['./manga.component.css' ]
})
export class MangaComponent {

    private _mangaList: Manga[];
    private _newManga:Manga = new Manga();

    constructor(private _mangaService: MangaService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._mangaService.getMangaList().subscribe(
            res => this._mangaList = res
        )
    }
    ajoutMangaModal(modal):void {
        this._modalService.open(modal);
    }

    resetData(modal):void {
        this._modalService.close(modal);
        this._newManga = new Manga();
    }

    addManga():void {
        this._newManga .note=0.0;
        this._newManga .imagePath="";
        this._mangaService.addManga(this._newManga ).subscribe(
            res => {
                this._mangaList.push(res);
                this.resetData("addMangaModal");
            }
        )
    }

}
