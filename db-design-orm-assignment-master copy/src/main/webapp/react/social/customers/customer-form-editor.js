import customerService from "./customer-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const CustomerFormEditor = () => {
  const {id} = useParams()
  const [customer, setCustomer] = useState({})
  useEffect(() => {
    if (id !== "new") {
      findCustomerById(id)
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
               value={customer.dob}/>
        <br/>
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
        <button className="btn btn-success"
                onClick={() => createCustomer(customer)}>
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