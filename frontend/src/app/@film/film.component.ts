import {Component, OnInit, ViewChild} from "@angular/core";
import {Film} from "./beans/Film";
import {FilmService} from "./film.service";
import {PopinComponent} from "../@popin/popin.component";

@Component({
    selector: 'musique',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css' ]
})
export class FilmComponent {

    @ViewChild('ajoutFlimPopin',{static:false}) ajoutFilmPopin:PopinComponent

    private _filmList: Film[] = [];
    private _newFilm:Film = new Film();

    constructor(private _filmService: FilmService) {}

    ngOnInit(): void {
        this._filmService.getFilmList().subscribe(
            res => this._filmList = res
        )
    }
    ajoutFilm():void{
        this.ajoutFilmPopin.displayModal();
    }
    resetData():void{
        this.ajoutFilmPopin.hideModal();
        this._newFilm=new Film();
    }
    addFilm():void{
        this._newFilm.note=0.0;
        this._newFilm.imagePath="";
        this._filmService.addFilm(this._newFilm).subscribe(
            res => {
                this._filmList.push(res);
                this.resetData();
            }
        )
    }

}
