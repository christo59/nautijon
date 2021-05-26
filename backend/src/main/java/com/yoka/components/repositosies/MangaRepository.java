package com.yoka.components.repositosies;

import com.yoka.components.dto.Manga;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MangaRepository extends PagingAndSortingRepository<Manga,Long> {


}
