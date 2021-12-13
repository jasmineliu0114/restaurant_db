package com.example.springtemplate.restaurants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RestaurantOrmDao {
    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping("/api/restaurants")
    public Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }
    
    @GetMapping("/api/restaurants")
    public List<Restaurant> findAllRestaurants() {
        return (List<Restaurant>) restaurantRepository.findAllRestaurants();
    }

    @GetMapping("/api/restaurants/{restaurantId}")
    public Restaurant findRestaurantById(
            @PathVariable("restaurantId") Integer id) {
        return restaurantRepository.findRestaurantById(id);
    }

    @PutMapping("/api/restaurants/{restaurantId}")
    public Restaurant updateRestaurant(
            @PathVariable("restaurantId") Integer id,
            @RequestBody() Restaurant newRestaurant) {
        Restaurant restaurant = restaurantRepository.findRestaurantById(id);
        restaurant.setName(newRestaurant.getName());
        restaurant.setCuisine(newRestaurant.getCuisine());
        restaurant.setCloseTime(newRestaurant.getCloseTime());
        restaurant.setOpenTime(newRestaurant.getOpenTime());
        return restaurantRepository.save(restaurant);
    }

    @DeleteMapping("/api/restaurants/{restaurantId}")
    public void deleteRestaurant(
            @PathVariable("restaurantId") Integer id) {
        restaurantRepository.deleteById(id);
    }
}