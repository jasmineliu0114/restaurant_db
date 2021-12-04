const {Link, useHistory} = window.ReactRouterDOM;

import customerService from "./customer-service"

const {useState, useEffect} = React;
const CustomerList = () => {
  const history = useHistory()
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    findAllCustomers()
  }, [])
  const findAllCustomers = () =>
      customerService.findAllCustomers()
      .then(customers => setCustomers(customers))

  return (
      <div>
        <h2>Customer List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/customers/new")}>
          Add Customer
        </button>
        <ul className="list-group">
          {
            customers.map(customer =>
                <li className="list-group-item"
                    key={customer.id}>
                  <Link to={`/customers/${customer.id}`}>
                    {customer.firstName},
                    {customer.lastName},
                    {customer.username}
                    {customer.email}
                  </Link>
                  <Link to={`/menuItems/${user.id}`}>
                    Menu Items: {user.id}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default CustomerList;