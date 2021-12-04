package com.example.springtemplate.daos;

import com.example.springtemplate.models.Restaurant;
import com.example.springtemplate.models.MenuItem;
import com.example.springtemplate.repositories.RestaurantRepository;
import com.example.springtemplate.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MenuItemOrmDao {
    @Autowired
    MenuItemRepository menuItemRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping("/api/menuItems")
    public MenuItem createMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    @PostMapping("/api/restaurants/{restaurantId}/menuItems")
    public MenuItem createMenuItemForRestaurant(
            @PathVariable("restaurantId") Integer rid,
            @RequestBody MenuItem menuItem) {
        menuItem = menuItemRepository.save(menuItem);
        Restaurant restaurant = restaurantRepository.findById(rid).get();
        menuItem.setRestaurant(restaurant);
        return menuItemRepository.save(menuItem);
    }

    @GetMapping("/api/restaurants/{rid}/menuItems")
    public List<MenuItem> findMenuItemsForRestaurant(
            @PathVariable("rid") Integer restaurantId) {
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();
        return restaurant.getMenu();
    }
    
    @GetMapping("/api/menuItems")
    public List<MenuItem> findAllMenuItems() {
        return (List<MenuItem>) menuItemRepository.findAll();
    }
    
    @GetMapping("/api/menuItems/{menuItemId}")
    public MenuItem findMenuItemById(
            @PathVariable("menuItemId") Integer id) {
        return menuItemRepository.findById(id).get();
    }

    @PutMapping("/api/menuItems/{menuItemId}")
    public MenuItem updateMenuItem(
            @PathVariable("menuItemId") Integer id,
            @RequestBody() MenuItem newMenuItem) {
        MenuItem menuItem = this.findMenuItemById(id);
        menuItem.setName(newMenuItem.getName());
        menuItem.setDescription(newMenuItem.getDescription());
        menuItem.setPrice(newMenuItem.getPrice());
        menuItem.setRestaurant(newMenuItem.getRestaurant());
        return menuItemRepository.save(menuItem);
    }

    @DeleteMapping("/api/menuItems/{menuItemId}")
    public void deleteMenuItem(
            @PathVariable("menuItemId") Integer id) {
        menuItemRepository.deleteById(id);
    }
}