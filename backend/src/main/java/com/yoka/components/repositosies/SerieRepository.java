package com.yoka.components.repositosies;

import com.yoka.components.dto.Serie;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SerieRepository extends PagingAndSortingRepository<Serie,Long> {

    @Query("CREATE (s:Serie {imagePath:{serie}.imagePath, titre:{serie}.titre, langue:{serie}.langue, dateSortie:{serie}.dateSortie, genre:{serie}.genre, note:{serie}.note, realisateur:{serie}.realisateur, type:{serie}.type, nbEpisode:{serie}.nbEpisode, theme:{serie}.theme, societeProduction:{serie}.societeProduction, resume:{serie}.resume}) RETURN s")
    Serie addSerie(@Param("serie") Serie serie);

    @Query("MATCH (se:Serie {titre:{serie}.titre}) " +
            "CREATE (se)<-[:HAS_SCORE]-(:Score {score:{score}}) " +
            "OPTIONAL MATCH (se)<-[:HAS_SCORE]-(s:Score) " +
            "SET se.note = avg(s) " +
            "RETURN avg(s)")
    Double addScore(@Param("score") Double score, @Param("serie") Serie serie);

    @Query("MATCH (s:Serie {titre:{serie}.titre})\n" +
            "OPTIONAL MATCH (s)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getAverageScore(@Param("serie") Serie serie);

}
