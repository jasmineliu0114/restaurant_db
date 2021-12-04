package com.example.springtemplate.daos;

import com.example.springtemplate.models.Restaurant;
import com.example.springtemplate.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RestaurantOrmDao {
    @Autowired
    RestaurantRepository restaurantRepository;

//    @PostMapping("/api/restaurants")
//    public Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
//        return restaurantRepository.save(restaurant);
//    }

    @PostMapping("/api/restaurants")
    public Restaurant createRestaurant() {
        Restaurant newRecord = new Restaurant();
        newRecord.setName("New Restaurant");
        return restaurantRepository.save(newRecord);
    }
    
    @GetMapping("/api/restaurants")
    public List<Restaurant> findAllRestaurants() {
        return (List<Restaurant>) restaurantRepository.findAll();
    }
    
    @GetMapping("/api/restaurants/{restaurantId}")
    public Restaurant findRestaurantById(
            @PathVariable("restaurantId") Integer id) {
        return restaurantRepository.findById(id).get();
    }
/*
    @GetMapping("/api/update/restaurant/{restaurantId}/{password}")
    public Restaurant updateRestaurant(
            @PathVariable("restaurantId") Integer id,
            @PathVariable("password") String newPass) {
        Restaurant restaurant = this.findRestaurantById(id);
        restaurant.setName(newPass);
        return restaurantRepository.save(restaurant);
    }

    @PutMapping("/api/restaurants/{restaurantId}")
    public Restaurant updateRestaurant(
            @PathVariable("restaurantId") Integer id,
            @RequestBody() Restaurant newRestaurant) {
        Restaurant restaurant = this.findRestaurantById(id);
        restaurant.setName(newRestaurant.getName());
        return restaurantRepository.save(restaurant);
    }
*/
    @PutMapping("/api/restaurants")
    public Restaurant updateRestaurant(
        @RequestBody() Restaurant newRestaurant) {
        Restaurant oldRestaurant = restaurantRepository.findById(newRestaurant.getId()).get();
        oldRestaurant.setName(newRestaurant.getName());
        return restaurantRepository.save(oldRestaurant);
    }

    @DeleteMapping("/api/restaurants/{restaurantId}")
    public void deleteRestaurant(
            @PathVariable("restaurantId") Integer id) {
        restaurantRepository.deleteById(id);
    }
}