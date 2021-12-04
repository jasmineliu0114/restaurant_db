package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class CustomerOrmDao {
    @Autowired
    CustomerRestRepository customerRepository;

    @GetMapping("/orm/customers/create/{fn}/{ln}/{un}/{pw}/(em}/{do}")
    public Customer createCustomer(
        @PathVariable("fn") String first,
        @PathVariable("ln") String last,
        @PathVariable("un") String uname,
        @PathVariable("pw") String pass,
        @PathVariable("em") String email,
        @PathVariable("do") String dob)
    {
        Customer customer = new Customer(first, last, uname, pass, email, dob);
        return customerRepository.save(customer);
    }

    @GetMapping("/orm/customers/find")
    public List<Customer> findAllCustomers() {
        return customerRepository.findAllCustomers();
    }

    @GetMapping("/orm/customers/find/id/{customerId}")
    public Customer findCustomerById(
        @PathVariable("customerId") Integer id) {
        return customerRepository.findCustomerById(id);
    }

    @GetMapping("/orm/customers/delete/{customerId}")
    public void deleteCustomer(
        @PathVariable("customerId") Integer id) {
        customerRepository.deleteById(id);
    }

    @GetMapping("/orm/customers/update/{customerId}/{password}")
    public Customer updateCustomer(
        @PathVariable("customerId") Integer id,
        @PathVariable("password") String newPass) {
        Customer customer = customerRepository.findCustomerById(id);
        customer.setPassword(newPass);
        return customerRepository.save(customer);
    }
}
