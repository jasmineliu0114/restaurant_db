import Customer from "./customer";

const { useState, useEffect } = React;

const Customers = () => {
    const [customers, setCustomers] = useState([])
    const [newCustomer, setNewCustomer] = useState({})
    const createCustomer = (customer) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/customers`, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(customer => setCustomers(customers => ([...customers, customer])))
    const updateCustomer = (id, newCustomer) =>
        fetch(`http://localhost:8080/orm/update/customer/${id}/${newCustomer.password}`)
            .then(response => response.json())
            .then(customer => setCustomers(customers => (customers.map(customer => customer._id === id ? newCustomer : customer))))
    const findAllCustomers = () =>
        fetch(`http://localhost:8080/orm/find/customers`)
            .then(response => response.json())
            .then(customers => setCustomers(customers))
    const deleteCustomer = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/customers/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(customers => setCustomers(customers => customers.filter(customer => customer._id !== id)))
    useEffect(() => {
        findAllCustomers()
    }, [])
    return(
        <div>
            <h2>Customers {customers.length}</h2>
            <input value={newCustomer.title}
                   onChange={(e) => setNewCustomer(newCustomer => ({...newCustomer, title: e.target.value}))}/>
            <input value={newCustomer.owner}
                   onChange={(e) => setNewCustomer(newCustomer => ({...newCustomer, owner: e.target.value}))}/>
            <button onClick={() => createCustomer(newCustomer)}>Create</button>
            {
              customers.map(customer =>
                    <Customer key={customer._id}
                        updateCustomer={updateCustomer}
                        deleteCustomer={deleteCustomer}
                        customer={customer}/>)
            }
        </div>
    )
}

export default Customers;


