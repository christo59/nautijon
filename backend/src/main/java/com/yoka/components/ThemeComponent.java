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

    public Double addScore(Double score, Theme theme){
        if (theme.getClass().equals(Anime.class)){
            return animeRepository.addScore(score, (Anime) theme);
        }
        if (theme.getClass().equals(Film.class)){
            return filmRepository.addScore(score, (Film) theme);
        }
        if (theme.getClass().equals(JeuVideo.class)){
            return jeuVideoRepository.addScore(score, (JeuVideo) theme);
        }
        if (theme.getClass().equals(Manga.class)){
            return mangaRepository.addScore(score, (Manga) theme);
        }
        if (theme.getClass().equals(Musique.class)){
            return musiqueRepository.addScore(score, (Musique) theme);
        }
        if (theme.getClass().equals(Serie.class)){
            return serieRepository.addScore(score, (Serie) theme);
        }
        return 0.0;
    }

}
