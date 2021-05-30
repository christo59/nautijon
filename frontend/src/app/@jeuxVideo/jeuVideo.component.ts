import {Component,OnInit} from "@angular/core";
import {ModalService} from "../@modal/modal.service";
import {JeuVideo} from "./beans/JeuVideo";
import {JeuVideoService} from "./jeuVideo.service";
import {Anime} from "../@anime/beans/Anime";


@Component({
    selector: 'jeuVideo',
    templateUrl: './jeuVideo.component.html',
    styleUrls: ['./jeuVideo.component.css' ]
})
export class JeuVideoComponent {

    private _videoGameList: JeuVideo[];
    private _newJeuVideo:JeuVideo= new JeuVideo();
    private _selectedJeuVideo:JeuVideo = new JeuVideo();

    constructor(private _jeuVideoService: JeuVideoService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._jeuVideoService.getVideoGameList().subscribe(
            res => this._videoGameList = res
        )
    }

    ajoutJeuVideoModal(modal):void {
        this._modalService.open(modal);
    }

    resetData(modal):void {
        this._modalService.close(modal);
        this._newJeuVideo = new JeuVideo();
    }

    addJeuVideo():void {
        this._newJeuVideo.note=0.0;
        this._newJeuVideo.imagePath="";
        this._jeuVideoService.addVideoGame(this._newJeuVideo).subscribe(
            res => {
                this._videoGameList.push(res);
                this.resetData("addJeuVideoModal");
            }
        )
    }

    selectJeuVideo(modal:string, JeuVideo:JeuVideo ):void {
        this._modalService.open(modal);
        this._selectedJeuVideo =JeuVideo;
    }
}
