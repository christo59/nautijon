package com.yoka.components.repositosies;

import com.yoka.components.dto.JeuVideo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JeuVideoRepository extends PagingAndSortingRepository<JeuVideo,Long> {


}
