package com.yoka.components.repositosies;

import com.yoka.components.dto.Film;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepository extends PagingAndSortingRepository<Film,Long> {

    @Query("CREATE (f:Film {imagePath:{film}.imagePath, titre:{film}.titre, langue:{film}.langue, dateSortie:{film}.dateSortie, genre:{film}.genre, note:{film}.note, realisateur:{film}.realisateur, type:{film}.type, duree:{film}.duree, theme:{film}.theme, societeProduction:{film}.societeProduction, resume:{film}.resume}) RETURN f")
    Film addFilm(@Param("film") Film film);

    @Query("MATCH (f:Film {titre:{film}.titre}) " +
            "CREATE (f)<-[:HAS_SCORE]-(:Score {score:{score}}) " +
            "OPTIONAL MATCH (f)<-[:HAS_SCORE]-(s:Score) " +
            "SET f.note = avg(s) " +
            "RETURN avg(s)")
    Double addScore(@Param("score") Double score, @Param("film") Film film);

    @Query("MATCH (f:Film {titre:{film}.titre})\n" +
            "OPTIONAL MATCH (f)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getAverageScore(@Param("film") Film film);

}
