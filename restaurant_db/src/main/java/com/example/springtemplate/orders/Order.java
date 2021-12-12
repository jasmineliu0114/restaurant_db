package com.example.springtemplate.orders;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
  @Id
  @GeneratedValue(strategy =
      GenerationType.IDENTITY)
  private Integer id;
  private String orderTime;
  private String specialInstructions;
  private Integer customerId;
  private Integer menuId;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getOrderTime() {
    return orderTime;
  }

  public void setOrderTime(String orderTime) {
    this.orderTime = orderTime;
  }

  public String getSpecialInstructions() {
    return specialInstructions;
  }

  public void setSpecialInstructions(String specialInstructions) {
    this.specialInstructions = specialInstructions;
  }

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public Integer getMenuId() {
    return menuId;
  }

  public void setMenuId(Integer menuId) {
    this.menuId = menuId;
  }
}
