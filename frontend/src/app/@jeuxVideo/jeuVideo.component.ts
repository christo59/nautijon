import {Component,OnInit} from "@angular/core";
import {JeuxVideo} from "./beans/JeuxVideo";
import {JeuVideoService} from "./jeuVideo.service";

@Component({
    selector: 'jeuVideo',
    templateUrl: './jeuVideo.component.html',
    styleUrls: ['./jeuVideo.component.css' ]
})
export class JeuVideoComponent {

    private _videoGameList: JeuxVideo[];

    constructor(private jeuVideoService: JeuVideoService) {}

    ngOnInit(): void {
        this.jeuVideoService.getVideoGameList().subscribe(
            res => this._videoGameList = res
        )
    }

}
