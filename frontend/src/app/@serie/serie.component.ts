import {Component, OnInit, ViewChild} from "@angular/core";
import {Serie} from "./beans/Serie";
import {SerieService} from "./serie.service";
import {PopinComponent} from "../@popin/popin.component";
import {Film} from "../@film/beans/Film";

@Component({
    selector: 'musique',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.css' ]
})
export class SerieComponent {

    @ViewChild('ajoutSeriePopin',{static:false}) ajoutSeriePopin:PopinComponent

    private _serieList: Serie[];
    private _newSerie:Serie = new Serie();

    constructor(private _serieService: SerieService) {}

    ngOnInit(): void {
        this._serieService.getSerieList().subscribe(
            res => this._serieList = res
        )
    }
    ajoutSerie():void{
        this.ajoutSeriePopin.displayModal();
    }
    resetData():void{
        this.ajoutSeriePopin.hideModal();
        this._newSerie=new Serie();
    }
    addSerie():void{
        this._newSerie.note=0.0;
        this._newSerie.imagePath="";
        this._serieService.addSerie(this._newSerie).subscribe(
            res => {
                this._serieList.push(res);
                this.resetData();
            }
        )
    }

}
