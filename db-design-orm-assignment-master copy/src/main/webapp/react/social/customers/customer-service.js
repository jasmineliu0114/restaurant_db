const CUSTOMERS_URL = "http://localhost:8080/api/customers"
const {Link} = window.ReactRouterDOM;

export const findAllCustomers = () =>
    fetch(CUSTOMERS_URL)
    .then(response => response.json())

export const findCustomerById = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}`)
    .then(response => response.json())

export const deleteCustomer = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
      method: "DELETE"
    })

export const createCustomer = (customer) =>
    fetch(CUSTOMERS_URL, {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateCustomer = (id, customer) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customer),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllCustomers,
  findCustomerById,
  deleteCustomer,
  createCustomer,
  updateCustomer
}
