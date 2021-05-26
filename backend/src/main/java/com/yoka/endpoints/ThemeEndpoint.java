package com.yoka.endpoints;

import com.yoka.components.ThemeComponent;
import com.yoka.components.dto.Anime;
import com.yoka.components.dto.JeuVideo;
import com.yoka.components.dto.Manga;
import com.yoka.components.dto.Musique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ThemeEndpoint {

    @Autowired
    ThemeComponent themeComponent;

    @GetMapping(value = "/musiques")
    public ResponseEntity<List<Musique>> listMusic(){
        return new ResponseEntity<>(themeComponent.getMusicList(), HttpStatus.OK);
//        List<Musique> toReturn = new ArrayList<>();
//        toReturn.add(new Musique("path","titre","langue", new Date(),"genre",5.0, "interprete", "album", "duree", "producteur"));
//        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping(value = "/jeuxVideos")
    public ResponseEntity<List<JeuVideo>> listVideoGames(){
//        return new ResponseEntity<>(themeComponent.getVideoGameList(), HttpStatus.OK);
        List<JeuVideo> toReturn = new ArrayList<>();
        toReturn.add(new JeuVideo("path","titre","langue", "date","genre",5.0, "type", "createur", "mode de jeu", "plateforme"));
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping(value = "/mangas")
    public ResponseEntity<List<Manga>> listManga(){
//        return new ResponseEntity<>(themeComponent.getMangaList(), HttpStatus.OK);
        List<Manga> toReturn = new ArrayList<>();
        toReturn.add(new Manga("path","titre","langue", "date","genre",5.0, "nombre de chapitre", "theme", "editeur", "type"));
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping(value = "/animes")
    public ResponseEntity<List<Anime>> listAnime(){
//        return new ResponseEntity<>(themeComponent.getAnimeList(), HttpStatus.OK);
        List<Anime> toReturn = new ArrayList<>();
        toReturn.add(new Anime("path","titre","langue", "date","genre",5.0, "type", "nombre d'episode", "theme", "editeur", "studio d'animation"));
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

}
