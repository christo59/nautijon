package com.yoka.components.repositosies;

import com.yoka.components.dto.Anime;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends PagingAndSortingRepository<Anime,Long> {

    @Query("MATCH (n:Anime {titre:{anime}.titre})\n" +
            "OPTIONAL MATCH (n)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getScore(@Param("anime") Anime anime);

}
