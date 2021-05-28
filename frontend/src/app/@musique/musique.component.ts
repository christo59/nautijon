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

    private _musicList: Musique[] = [];
    private _newMusique:Musique = new Musique();

    constructor(private _musiqueService: MusiqueService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._musiqueService.getMusicList().subscribe(
            res => this._musicList = res
        )
    }

    ajoutMusiqueModal(modal):void {
        this._modalService.open(modal);
    }

    resetData(modal):void {
        this._modalService.close(modal);
        this._newMusique = new Musique();
    }

    addAnime():void {
        this._newMusique.note=0.0;
        this._newMusique.imagePath="";
        this._musiqueService.addMusic(this._newMusique).subscribe(
            res => {
                this._musicList.push(res);
                this.resetData("addMusiqueModal");
            }
        )
    }

}
