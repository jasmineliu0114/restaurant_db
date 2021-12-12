package com.example.springtemplate.menuItems;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MenuItemRepository
        extends CrudRepository<MenuItem, Integer> {
  @Query(value = "SELECT * FROM menu_items",
      nativeQuery = true)
  public List<MenuItem> findAllMenuItems();
  @Query(value = "SELECT * FROM menu_items WHERE id=:menuItemId",
      nativeQuery = true)
  public MenuItem findMenuItemById(@Param("menuItemId") Integer id);
}
