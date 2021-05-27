package com.yoka.components.repositosies;

import com.yoka.components.dto.Serie;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SerieRepository extends PagingAndSortingRepository<Serie,Long> {


}
