package com.yoka.components.repositosies;

import com.yoka.components.dto.Anime;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends PagingAndSortingRepository<Anime,Long> {

    @Query("CREATE (a:Anime {imagePath:{anime}.imagePath, titre:{anime}.titre, langue:{anime}.langue, dateSortie:{anime}.dateSortie, genre:{anime}.genre, note:{anime}.note, createur:{anime}.createur, type:{anime}.type, nbEpisode:{anime}.nbEpisode, theme:{anime}.theme, editeur:{anime}.editeur, studioAnimation:{anime}.studioAnimation, resume:{anime}.resume}) RETURN a")
    Anime addAnime(@Param("anime") Anime anime);

    @Query("MATCH (a:Anime {titre:{anime}.titre})\n" +
            "OPTIONAL MATCH (a)<-[:HAS_SCORE]-(s:Score)\n" +
            "CREATE (a)<-[:HAS_SCORE]-(:Score {score:{score})\n" +
            "RETURN count(s)")
    Double addScore(@Param("score") Double score, @Param("anime") Anime anime);

    @Query("MATCH (a:Anime {titre:{anime}.titre})\n" +
            "SET a.note = {avgScore}\n" +
            "RETURN {avgScore}")
    Double updateAverageScore(@Param("avgScore") Double avgScore, @Param("anime") Anime anime);

    @Query("MATCH (a:Anime {titre:{anime}.titre})\n" +
            "return count(a) > 0")
    boolean animeExist(@Param("anime") Anime anime);

}
