package com.yoka.components;

import com.yoka.components.dto.*;
import com.yoka.components.repositosies.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeComponent {

    @Autowired
    MusiqueRepository musiqueRepository;

    @Autowired
    JeuVideoRepository jeuVideoRepository;

    @Autowired
    MangaRepository mangaRepository;

    @Autowired
    AnimeRepository animeRepository;

    @Autowired
    SerieRepository serieRepository;

    @Autowired
    FilmRepository filmRepository;


    public List<Musique> getMusicList(){
        return (List<Musique>) musiqueRepository.findAll();
    }
    public Musique addMusic(Musique musique){
        return musiqueRepository.addMusique(musique);
    }

    public List<JeuVideo> getVideoGameList(){
        return (List<JeuVideo>) jeuVideoRepository.findAll();
    }

    public JeuVideo addVideoGame(JeuVideo jeuVideo){
        return jeuVideoRepository.addVideoGame(jeuVideo);
    }

    public List<Manga> getMangaList(){
        return (List<Manga>) mangaRepository.findAll();
    }

    public Manga addManga(Manga manga){
        return mangaRepository.addManga(manga);
    }

    public List<Anime> getAnimeList(){
        return (List<Anime>) animeRepository.findAll();
    }

    public Anime addAnime(Anime anime){
        return animeRepository.addAnime(anime);
    }

    public List<Serie> getSerieList(){
        return (List<Serie>) serieRepository.findAll();
    }

    public Serie addSerie(Serie serie){
        return serieRepository.addSerie(serie);
    }

    public List<Film> getFilmList(){
        return (List<Film>) filmRepository.findAll();
    }

    public Film addFilm(Film film){
        return filmRepository.addFilm(film);
    }

    public Double addScore(Double score, Anime anime){
        Double nbOfScore = animeRepository.addScore(score, anime) + 1;
        return animeRepository.updateAverageScore((anime.getNote()+score)/nbOfScore, anime);
    }

    public Double addScore(Double score, Film film){
        Double nbOfScore = filmRepository.addScore(score, film) + 1;
        return filmRepository.updateAverageScore((film.getNote()+score)/nbOfScore, film);
    }

    public Double addScore(Double score, JeuVideo jeuVideo){
        Double nbOfScore = jeuVideoRepository.addScore(score, jeuVideo) + 1;
        return jeuVideoRepository.updateAverageScore((jeuVideo.getNote()+score)/nbOfScore, jeuVideo);
    }

    public Double addScore(Double score, Manga manga){
        Double nbOfScore = mangaRepository.addScore(score, manga) + 1;
        return mangaRepository.updateAverageScore((manga.getNote()+score)/nbOfScore, manga);
    }

    public Double addScore(Double score, Musique musique){
        Double nbOfScore = musiqueRepository.addScore(score, musique) + 1;
        return musiqueRepository.updateAverageScore((musique.getNote()+score)/nbOfScore, musique);
    }

    public Double addScore(Double score, Serie serie){
        Double nbOfScore = serieRepository.addScore(score, serie) + 1;
        return serieRepository.updateAverageScore((serie.getNote()+score)/nbOfScore, serie);
    }

    public boolean nodeExist(Anime anime){
        return this.animeRepository.animeExist(anime);
    }

    public boolean nodeExist(Film film){
        return this.filmRepository.filmExist(film);
    }

    public boolean nodeExist(JeuVideo jeuVideo){
        return this.jeuVideoRepository.jeuVideoExist(jeuVideo);
    }

    public boolean nodeExist(Manga manga){
        return this.mangaRepository.mangaExist(manga);
    }

    public boolean nodeExist(Musique musique){
        return this.musiqueRepository.musiqueExist(musique);
    }

    public boolean nodeExist(Serie serie){
        return this.serieRepository.serieExist(serie);
    }

}
