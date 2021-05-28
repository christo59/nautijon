package com.yoka.components.repositosies;

import com.yoka.components.dto.Anime;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends PagingAndSortingRepository<Anime,Long> {

    @Query("CREATE (n:Film {imagePath:{anime}.imagePath, titre:{anime}.titre, langue:{anime}.langue, dateSortie:{anime}.dateSortie, genre:{anime}.genre, note:{anime}.note, createur:{anime}.createur, type:{anime}.type, nbEpisode:{anime}.nbEpisode, theme:{anime}.theme, editeur:{anime}.editeur, studioAnimation:{anime}.studioAnimation, resume:{anime}.resume}) RETURN n")
    Anime addAnime(@Param("anime") Anime anime);

    @Query("MATCH (n:Anime {titre:{anime}.titre})\n" +
            "OPTIONAL MATCH (n)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getScore(@Param("anime") Anime anime);

}
