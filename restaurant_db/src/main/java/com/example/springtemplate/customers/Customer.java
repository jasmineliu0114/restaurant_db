package com.example.springtemplate.customers;

import com.example.springtemplate.orders.Order;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="customers")

public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String dob;

    @OneToMany(mappedBy = "customerId")
    @JsonIgnore
    private List<Order> orders;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getDOB() { return dob; }
    public void setDOB(String dob) { this.dob = dob; }
    public List<Order> getOrders() {
        return orders;
    }
    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Customer(String username, String password, String first_name, String last_name, String email, String dob) {
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.dob = dob;
    }

    public Customer() {}
}
