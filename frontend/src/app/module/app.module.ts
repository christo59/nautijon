import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../@app/app.component';
import {HeaderComponent} from "../@header/header.component";
import {HomeComponent} from "../@home/home.component";
import {FooterComponent} from "../@footer/footer.component";
import {MusiqueComponent} from "../@musique/musique.component";
import {MusiqueService} from "../@musique/musique.service";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {JeuVideoComponent} from "../@jeuxVideo/jeuVideo.component";
import {JeuVideoService} from "../@jeuxVideo/jeuVideo.service";
import {MangaComponent} from "../@manga/manga.component";
import {MangaService} from "../@manga/manga.service";
import {AnimeComponent} from "../@anime/anime.component";
import {AnimeService} from "../@anime/anime.service";
import {SerieComponent} from "../@serie/serie.component";
import {SerieService} from "../@serie/serie.service";
import {FilmComponent} from "../@film/film.component";
import {FilmService} from "../@film/film.service";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "../@modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      HomeComponent,
      FooterComponent,
      MusiqueComponent,
      JeuVideoComponent,
      MangaComponent,
      AnimeComponent,
      SerieComponent,
      FilmComponent,
      ModalComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        CommonModule
    ],
  providers: [
      MusiqueService,
      JeuVideoService,
      MangaService,
      AnimeService,
      SerieService,
      FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
