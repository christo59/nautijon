import {Component,OnInit} from "@angular/core";
import {Film} from "./beans/Film";
import {FilmService} from "./film.service";

@Component({
    selector: 'musique',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css' ]
})
export class FilmComponent {

    private _filmList: Film[];

    constructor(private _filmService: FilmService) {}

    ngOnInit(): void {
        this._filmService.getFilmList().subscribe(
            res => this._filmList = res
        )
    }

}
