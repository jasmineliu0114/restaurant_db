package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Customer;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
  @Query(value = "SELECT * FROM customers", nativeQuery = true)
  public List<Customer> findAllCustomers();
  @Query(value = "SELECT * FROM customers WHERE id=:customerId", nativeQuery = true)
  public Customer findCustomerById(@Param("customerId") Integer id);
}
