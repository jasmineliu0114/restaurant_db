package com.example.springtemplate.orders;

import com.example.springtemplate.customers.Customer;
import com.example.springtemplate.menuItems.MenuItem;
import com.example.springtemplate.menuItems.MenuItemRepository;
import com.example.springtemplate.customers.CustomerRestRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class OrderOrmDao {

  @Autowired
  OrderRepository orderRepository;

  @Autowired
  MenuItemRepository menuItemRepository;

  @Autowired
  CustomerRestRepository customerRepository;
  
  @PostMapping("/api/orders")
  public Order createOrder(@RequestBody Order order) {
    return orderRepository.save(order);
  }

  @GetMapping("/api/orders")
  public List<Order> findAllOrders() {
    return (List<Order>) orderRepository.findAllOrders();
  }

  @GetMapping("/api/orders/{orderId}")
  public Order findOrderById(
      @PathVariable("orderId") Integer id) {
    return orderRepository.findOrderById(id);
  }

  @PutMapping("/api/orders/{orderId}")
  public Order updateOrder(
      @PathVariable("orderId") Integer id,
      @RequestBody() Order newOrder) {
    Order order = this.findOrderById(id);
    order.setOrderTime(newOrder.getOrderTime());
    order.setSpecialInstructions(newOrder.getSpecialInstructions());
    return orderRepository.save(order);
  }

  @DeleteMapping("/api/orders/{orderId}")
  public void deleteOrder(
      @PathVariable("orderId") Integer id) {
    orderRepository.deleteById(id);
  }

  @PostMapping("/api/menuItems/{menuItemId}/orders")
  public Order createOrderForMenuItem(
      @PathVariable("menuItemId") Integer mid,
      @RequestBody Order order) {
    order = orderRepository.save(order);
    order.setMenuId(mid);
    return orderRepository.save(order);
  }

  @GetMapping("/api/menuItems/{mid}/orders")
  public List<Order> findOrdersForMenuItem(
      @PathVariable("mid") Integer menuItemId) {
    MenuItem menuItem = menuItemRepository.findById(menuItemId).get();
    return menuItem.getOrders();
  }

  @PostMapping("/api/customers/{customerId}/orders")
  public Order createOrderForCustomer(
      @PathVariable("customerId") Integer cid,
      @RequestBody Order order) {
    order = orderRepository.save(order);
    order.setCustomerId(cid);
    return orderRepository.save(order);
  }

  @GetMapping("/api/customers/{cid}/orders")
  public List<Order> findOrdersForCustomer(
      @PathVariable("cid") Integer customerId) {
    Customer customer = customerRepository.findById(customerId).get();
    return customer.getOrders();
  }
}
