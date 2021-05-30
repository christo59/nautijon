package com.yoka.components.repositosies;

import com.yoka.components.dto.Manga;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MangaRepository extends PagingAndSortingRepository<Manga,Long> {

    @Query("CREATE (m:Manga {imagePath:{manga}.imagePath, titre:{manga}.titre, langue:{manga}.langue, dateSortie:{manga}.dateSortie, genre:{manga}.genre, note:{manga}.note, nbChapitre:{manga}.nbChapitre, theme:{manga}.theme, editeur:{manga}.editeur, type:{manga}.type, resume:{manga}.resume}) RETURN m")
    Manga addManga(@Param("manga") Manga manga);

    @Query("MATCH (m:Manga {titre:{manga}.titre})\n" +
            "OPTIONAL MATCH (m)<-[:HAS_SCORE]-(s:Score)\n" +
            "CREATE (m)<-[:HAS_SCORE]-(:Score {score:{score}})\n" +
            "RETURN count(s)")
    Double addScore(@Param("score") Double score, @Param("manga") Manga manga);

    @Query("MATCH (m:Manga {titre:{manga}.titre})\n" +
            "SET m.note = {avgScore}\n" +
            "RETURN {avgScore}")
    Double updateAverageScore(@Param("avgScore") Double avgScore, @Param("manga") Manga manga);

}
