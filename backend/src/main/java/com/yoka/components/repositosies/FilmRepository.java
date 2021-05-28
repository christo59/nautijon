package com.yoka.components.repositosies;

import com.yoka.components.dto.Film;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepository extends PagingAndSortingRepository<Film,Long> {

    @Query("CREATE (n:Film {imagePath:{film}.imagePath, titre:{film}.titre, langue:{film}.langue, dateSortie:{film}.dateSortie, genre:{film}.genre, note:{film}.note, realisateur:{film}.realisateur, type:{film}.type, duree:{film}.duree, theme:{film}.theme, societeProduction:{film}.societeProduction, resume:{film}.resume}) RETURN n")
    Film addFilm(@Param("film") Film film);

    @Query("MATCH (n:Film {titre:{film}.titre})\n" +
            "OPTIONAL MATCH (n)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getScore(@Param("film") Film film);

}
