import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./@home/home.component";
import {MusiqueComponent} from "./@musique/musique.component";
import {JeuVideoComponent} from "./@jeuxVideo/jeuVideo.component";
import {MangaComponent} from "./@manga/manga.component";
import {AnimeComponent} from "./@anime/anime.component";
import {NgModule} from "@angular/core";
import {SerieComponent} from "./@serie/serie.component";
import {FilmComponent} from "./@film/film.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'musique', component: MusiqueComponent},
  {path: 'jeuVideo', component: JeuVideoComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'film', component: FilmComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
