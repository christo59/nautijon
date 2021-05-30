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

    @Query("MATCH (se:Serie {titre:{serie}.titre})\n" +
            "OPTIONAL MATCH (se)<-[:HAS_SCORE]-(s:Score)\n" +
            "CREATE (se)<-[:HAS_SCORE]-(:Score {score:{score}})\n" +
            "RETURN count(s)")
    Double addScore(@Param("score") Double score, @Param("serie") Serie serie);

    @Query("MATCH (s:Serie {titre:{serie}.titre})\n" +
            "SET s.note = {avgScore}\n" +
            "RETURN {avgScore}")
    Double updateAverageScore(@Param("avgScore") Double avgScore, @Param("serie") Serie serie);

}
