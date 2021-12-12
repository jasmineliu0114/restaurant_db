import customerService, { findAllOrders } from "./customer-service"
const { useState, useEffect } = React;
const { useParams, Link, useHistory } = window.ReactRouterDOM;
const CustomerFormEditor = () => {
  const { id } = useParams()
  const [customer, setCustomer] = useState({})
  useEffect(() => {
    if (id !== "new") {
      findCustomerById(id)
    }
  }, []);

  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (id !== "new") {
      findAllOrders(id)
    }
  }, []);

  const findCustomerById = (id) =>
      customerService.findCustomerById(id)
      .then(customer => setCustomer(customer))
  const deleteCustomer = (id) =>
      customerService.deleteCustomer(id)
      .then(() => history.back())
  const createCustomer = (customer) =>
      customerService.createCustomer(customer)
      .then(() => history.back())
  const updateCustomer = (id, newCustomer) =>
      customerService.updateCustomer(id, newCustomer)
      .then(() => history.back())

  const findAllOrders = (id) =>
      customerService.findAllOrders(id)
      .then(orders => setOrders(orders))

  return (
      <div>
        <h2>Customer Editor</h2>
        <label>Id</label>
        <input className="form-control" value={customer.id}/>
        <label>First Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, firstName: e.target.value}))}
               value={customer.firstName}/>
        <label>Last Name</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, lastName: e.target.value}))}
               value={customer.lastName}/>
        <label>Username</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, username: e.target.value}))}
               value={customer.username}/>
        <label>Password</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, password: e.target.value}))}
               value={customer.password}/>
        <label>Email</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, email: e.target.value}))}
               value={customer.email}/>
        <label>DOB</label>
        <input className="form-control"
               onChange={(e) =>
                   setCustomer(customer =>
                       ({...customer, dob: e.target.value}))}
               value={customer.dob}/><br /><br />
        <h2>Customer Orders</h2>
        <ul>
          {
            orders.map(order =>
                <li key={order.id}>
                  <Link to={`/orders/${order.id}`}>
                    {order.orderTime}
                  </Link>
                </li>)
          }
        </ul>
        <br></br>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteCustomer(customer.id)}>
          Delete
        </button>
        <button
            onClick={() => createCustomer(customer)}
            className="btn btn-success">
          Create
        </button>
        <button className="btn btn-success"
                onClick={() => updateCustomer(customer.id, customer)}>
          Save
        </button>
      </div>
  )
}

export default CustomerFormEditor