package com.yoka.components.repositosies;

import com.yoka.components.dto.Anime;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends PagingAndSortingRepository<Anime,Long> {


}
