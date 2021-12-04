package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.Restaurant;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RestaurantRepository
        extends CrudRepository<Restaurant, Integer> {
  /*@Query(value = "SELECT * FROM restaurants",
      nativeQuery = true)
  public List<Restaurant> findAllRestaurants();
  @Query(value = "SELECT * FROM restaurants WHERE id=:restaurantId",
      nativeQuery = true)
  public Restaurant findRestaurantById(@Param("restaurantId") Integer id);*/
}
