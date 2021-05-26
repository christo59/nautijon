package com.yoka.components;

import com.yoka.components.dto.Anime;
import com.yoka.components.dto.JeuVideo;
import com.yoka.components.dto.Manga;
import com.yoka.components.dto.Musique;
import com.yoka.components.repositosies.AnimeRepository;
import com.yoka.components.repositosies.JeuVideoRepository;
import com.yoka.components.repositosies.MangaRepository;
import com.yoka.components.repositosies.MusiqueRepository;
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


    public List<Musique> getMusicList(){
        return (List<Musique>) musiqueRepository.findAll();
    }

    public List<JeuVideo> getVideoGameList(){
        return (List<JeuVideo>) jeuVideoRepository.findAll();
    }
    public List<Manga> getMangaList(){
        return (List<Manga>) mangaRepository.findAll();
    }
    public List<Anime> getAnimeList(){
        return (List<Anime>) animeRepository.findAll();
    }

}
