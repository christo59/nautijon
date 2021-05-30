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

    @Query("MATCH (m:Musique {titre:{musique}.titre})\n" +
            "OPTIONAL MATCH (m)<-[:HAS_SCORE]-(s:Score)\n" +
            "CREATE (m)<-[:HAS_SCORE]-(:Score {score:{score}})\n" +
            "RETURN count(s)")
    Double addScore(@Param("score") Double score, @Param("musique") Musique musique);

    @Query("MATCH (m:Musique {titre:{musique}.titre})\n" +
            "SET m.note = {avgScore}\n" +
            "RETURN {avgScore}")
    Double updateAverageScore(@Param("avgScore") Double avgScore, @Param("musique") Musique musique);

}
