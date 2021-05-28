import {Component, OnInit} from "@angular/core";
import {Film} from "./beans/Film";
import {FilmService} from "./film.service";
import {ModalService} from "../@modal/modal.service";

@Component({
    selector: 'musique',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css' ]
})
export class FilmComponent {

    private _filmList: Film[] = [];
    private _newFilm:Film = new Film();

    constructor(private _filmService: FilmService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._filmService.getFilmList().subscribe(
            res => this._filmList = res
        )
    }
    ajoutFilm(modal):void{
        this._modalService.open(modal);
    }
    resetData(modal):void{
        this._modalService.close(modal);
        this._newFilm=new Film();
    }
    addFilm():void{
        this._newFilm.note=0.0;
        this._newFilm.imagePath="";
        this._filmService.addFilm(this._newFilm).subscribe(
            res => {
                this._filmList.push(res);
                this.resetData("addFilmModal");
            }
        )
    }

}
