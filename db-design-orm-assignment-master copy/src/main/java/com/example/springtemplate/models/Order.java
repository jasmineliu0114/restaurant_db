package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

  @ManyToOne
  @JsonIgnore
  private Customer customer;
  @ManyToOne
  @JsonIgnore
  private MenuItem menu;

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

  public Customer getOrderedBy() {
    return customer;
  }

  public void setOrderedBy(Customer orderedBy) {
    this.customer = orderedBy;
  }

  public MenuItem getOrdered() {
    return menu;
  }

  public void setOrdered(MenuItem ordered) {
    this.menu = ordered;
  }
}
