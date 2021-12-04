package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.MenuItem;
import com.example.springtemplate.models.Order;
import com.example.springtemplate.repositories.CustomerRestRepository;
import com.example.springtemplate.repositories.MenuItemRepository;
import com.example.springtemplate.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderOrmDao {
  @Autowired
  OrderRepository orderRepository;
  CustomerRestRepository customerRepository;
  MenuItemRepository menuItemRepository;

  @PostMapping("/api/orders")
  public Order createOrder(@RequestBody Order order){
    return orderRepository.save(order);
  }

  @GetMapping("/api/orders")
  public List<Order> findAllOrders() {
    return orderRepository.findAllOrders();
  }

  @GetMapping("/api/orders/{orderId}")
  public Order findOrderById(
      @PathVariable("orderId") Integer id) {
    return orderRepository.findOrderById(id);
  }

  @GetMapping("/api/customers/{cid}/orders")
  public List<Order> findOrdersForCustomer(
      @PathVariable("cid") Integer customerId) {
    Customer customer = customerRepository.findById(customerId).get();
    return customer.getOrders();
  }

  @GetMapping("/api/menuItems/{mid}/orders")
  public List<Order> findOrdersForMenuItem(
      @PathVariable("mid") Integer menuItemId) {
    MenuItem menuItem = menuItemRepository.findById(menuItemId).get();
    return menuItem.getOrders();
  }

  @PutMapping("/api/orders/{orderId}")
  public Order updateOrder(@PathVariable("orderId") Integer id,
      @RequestBody Order orderUpdates) {
    Order order = orderRepository.findOrderById(id);
    order.setOrderTime(orderUpdates.getOrderTime());
    order.setSpecialInstructions(orderUpdates.getSpecialInstructions());
    return orderRepository.save(order);
  }

  @DeleteMapping("/api/orders/{orderId}")
  public void deleteOrder(@PathVariable("orderId") Integer id) {
    orderRepository.deleteById(id);
  }

}
