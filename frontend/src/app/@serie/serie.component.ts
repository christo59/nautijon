import {Component,OnInit} from "@angular/core";
import {Serie} from "./beans/Serie";
import {SerieService} from "./serie.service";

@Component({
    selector: 'musique',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.css' ]
})
export class SerieComponent {

    private _serieList: Serie[];

    constructor(private _serieService: SerieService) {}

    ngOnInit(): void {
        this._serieService.getSerieList().subscribe(
            res => this._serieList = res
        )
    }

}
