package com.koby5i.bikes.repositories;

import com.koby5i.bikes.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
