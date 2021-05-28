import {Component,OnInit} from "@angular/core";
import {Serie} from "./beans/Serie";
import {SerieService} from "./serie.service";
import {ModalService} from "../@modal/modal.service";

@Component({
    selector: 'musique',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.css' ]
})
export class SerieComponent {

    private _serieList: Serie[] = [];
    private _newSerie:Serie = new Serie();

    constructor(private _serieService: SerieService,
                private _modalService: ModalService) {}

    ngOnInit(): void {
        this._serieService.getSerieList().subscribe(
            res => this._serieList = res
        )
    }

    ajoutSerieModal(modal):void {
        this._modalService.open(modal);
    }

    resetData(modal):void {
        this._modalService.close(modal);
        this._newSerie = new Serie();
    }

    addSerie():void {
        this._newSerie.note=0.0;
        this._newSerie.imagePath="";
        this._serieService.addSerie(this._newSerie).subscribe(
            res => {
                this._serieList.push(res);
                this.resetData("addSerieModal");
            }
        )
    }

}
