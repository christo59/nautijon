package com.yoka.components.repositosies;

import com.yoka.components.dto.Musique;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MusiqueRepository extends PagingAndSortingRepository<Musique,Long> {

    @Query("CREATE (n:Musique {imagePath:{musique}.imagePath, titre:{musique}.titre, langue:{musique}.langue, dateSortie:{musique}.dateSortie, genre:{musique}.genre, note:{musique}.note, interprete:{musique}.interprete, album:{musique}.album, duree:{musique}.duree, producteur:{musique}.producteur, paroles:{musique}.paroles}) RETURN n")
    Musique addMusique(@Param("musique") Musique musique);

    @Query("MATCH (m:Musique {titre:{musique}.titre}) " +
            "CREATE (m)<-[:HAS_SCORE]-(:Score {score:{score}}) " +
            "OPTIONAL MATCH (m)<-[:HAS_SCORE]-(s:Score) " +
            "SET m.note = avg(s) " +
            "RETURN avg(s)")
    Double addScore(@Param("score") Double score, @Param("musique") Musique musique);

    @Query("MATCH (n:Musique {titre:{musique}.titre})\n" +
            "OPTIONAL MATCH (n)<-[:HAS_SCORE]-(s:Score)\n" +
            "RETURN CASE WHEN avg(s.score) IS NOT NULL THEN avg(s.score) ELSE 0.0 END")
    Double getAverageScore(@Param("musique") Musique musique);

}
