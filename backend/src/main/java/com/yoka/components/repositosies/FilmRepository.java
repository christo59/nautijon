package com.yoka.components.repositosies;

import com.yoka.components.dto.Film;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepository extends PagingAndSortingRepository<Film,Long> {


}
