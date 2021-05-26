import {Component,OnInit} from "@angular/core";
import {Musique} from "./beans/Musique";
import {MusiqueService} from "./musique.service";

@Component({
    selector: 'musique',
    templateUrl: './musique.component.html',
    styleUrls: ['./musique.component.css' ]
})
export class MusiqueComponent {

    private _musicList: Musique[];

    constructor(private _musiqueService: MusiqueService) {}

    ngOnInit(): void {
        this._musiqueService.getMusicList().subscribe(
            res => this._musicList = res
        )
    }

}
