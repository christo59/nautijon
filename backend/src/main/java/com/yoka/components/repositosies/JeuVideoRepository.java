package com.yoka.components.repositosies;

import com.yoka.components.dto.JeuVideo;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JeuVideoRepository extends PagingAndSortingRepository<JeuVideo,Long> {

    @Query("CREATE (n:JeuVideo {imagePath:{jeuVideo}.imagePath, titre:{jeuVideo}.titre, langue:{jeuVideo}.langue, dateSortie:{jeuVideo}.dateSortie, genre:{jeuVideo}.genre, note:{jeuVideo}.note, type:{jeuVideo}.type, createur:{jeuVideo}.createur, modeDeJeu:{jeuVideo}.modeDeJeu, plateforme:{jeuVideo}.plateforme, resume:{jeuVideo}.resume}) RETURN n")
    JeuVideo addVideoGame(@Param("jeuVideo") JeuVideo jeuVideo);

    @Query("MATCH (n:JeuVideo {titre:{jeuVideo}.titre})\n" +
            "OPTIONAL MATCH (n)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getScore(@Param("jeuVideo") JeuVideo jeuVideo);
}
