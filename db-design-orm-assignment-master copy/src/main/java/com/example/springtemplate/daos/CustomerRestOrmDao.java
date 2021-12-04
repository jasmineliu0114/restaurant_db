package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerRestOrmDao {
    @Autowired
    CustomerRestRepository customerRepository;

    @PostMapping("/api/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }
    
    @GetMapping("/api/customers")
    public List<Customer> findAllCustomers() {
        return customerRepository.findAllCustomers();
    }
    
    @GetMapping("/api/customers/{customerId}")
    public Customer findCustomerById(
            @PathVariable("customerId") Integer id) {
        return customerRepository.findCustomerById(id);
    }
    
    @PutMapping("/api/customers/{customerId}")
    public Customer updateCustomer(
            @PathVariable("customerId") Integer id,
            @RequestBody Customer customerUpdates) {
        Customer user = customerRepository.findCustomerById(id);
        user.setFirstName(customerUpdates.getFirstName());
        user.setLastName(customerUpdates.getLastName());
        user.setUsername(customerUpdates.getUsername());
        user.setPassword(customerUpdates.getPassword());
        user.setEmail(customerUpdates.getEmail());
        user.setDOB(customerUpdates.getDOB());
        return customerRepository.save(user);
    }
    
    @DeleteMapping("/api/customers/{customerId}")
    public void deleteUser(
            @PathVariable("customerId") Integer id) {
        customerRepository.deleteById(id);
    }
}