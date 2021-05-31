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

    private _JeuVideoList: JeuVideo[];
    private _newJeuVideo:JeuVideo= new JeuVideo();
    private _selectedJeuVideo:JeuVideo = new JeuVideo();
    private _isSettingPassword:boolean = false;
    private _isMarking:boolean = false;

    private _selectJeuVideoModalName: string = "selectJeuVideoModal";
    private _addJeuVideoModalName: string = "addJeuVideoModal";

    constructor(private _jeuVideoService: JeuVideoService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._jeuVideoService.getVideoGameList().subscribe(
            res => this._JeuVideoList = res
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
        this._newJeuVideo = new JeuVideo();
        this._selectedJeuVideo = new JeuVideo();
    }

    addJeuVideo():void {
        this._newJeuVideo.note=0.0;
        this._newJeuVideo.imagePath="";
        this._jeuVideoService.addVideoGame(this._newJeuVideo).subscribe(
            res => {
                this._JeuVideoList.push(res);
                this.resetData("addJeuVideoModal");
            }
        )
    }

    selectJeuVideo(modal:string, JeuVideo:JeuVideo ):void {
        this._modalService.open(modal);
        this._selectedJeuVideo =JeuVideo;
    }

    addScore(score:string): void {
        if (!isNaN(Number(score))) {
            this._jeuVideoService.addScoreJeuVideo(score, this._selectedJeuVideo).subscribe(
                res => {
                    this._JeuVideoList.find(anime => this._selectedJeuVideo === anime).note = res;
                    this._isMarking = false;
                }
            );
        }
    }
}
