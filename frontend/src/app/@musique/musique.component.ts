import {Component, OnInit, ViewChild} from "@angular/core";
import {Musique} from "./beans/Musique";
import {MusiqueService} from "./musique.service";
import {PopinComponent} from "../@popin/popin.component";
import {Film} from "../@film/beans/Film";

@Component({
    selector: 'musique',
    templateUrl: './musique.component.html',
    styleUrls: ['./musique.component.css' ]
})
export class MusiqueComponent {

    @ViewChild('ajoutMusiquePopin',{static:false}) ajoutMusiquePopin:PopinComponent

    private _musicList: Musique[];
    private _newMusique:Musique = new Musique();

    constructor(private _musiqueService: MusiqueService) {}

    ngOnInit(): void {
        this._musiqueService.getMusicList().subscribe(
            res => this._musicList = res
        )
    }

    ajoutMusique():void{
        this.ajoutMusiquePopin.displayModal();
    }
    resetData():void{
        this.ajoutMusiquePopin.hideModal();
        this._newMusique=new Musique();
    }
    addMusic():void{
        this._newMusique.note=0.0;
        this._newMusique.imagePath="";
        this._musiqueService.addMusic(this._newMusique).subscribe(
            res => {
                this._musicList.push(res);
                this.resetData();
            }
        )
    }


}
