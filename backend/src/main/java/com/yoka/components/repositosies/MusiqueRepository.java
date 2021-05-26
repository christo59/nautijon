package com.yoka.components.repositosies;

import com.yoka.components.dto.Musique;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MusiqueRepository extends PagingAndSortingRepository<Musique,Long> {


}
