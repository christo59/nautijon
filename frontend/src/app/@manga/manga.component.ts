import {Component,OnInit} from "@angular/core";
import {Manga} from "./beans/Manga";
import {MangaService} from "./manga.service";

@Component({
    selector: 'manga',
    templateUrl: './manga.component.html',
    styleUrls: ['./manga.component.css' ]
})
export class MangaComponent {

    private _mangaList: Manga[];

    constructor(private _mangaService: MangaService) {}

    ngOnInit(): void {
        this._mangaService.getMangaList().subscribe(
            res => this._mangaList = res
        )
    }

}
