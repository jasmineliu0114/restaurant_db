const { useState, useEffect } = React;

const Customer = ({customer, deleteCustomer, updateCustomer}) => {
    const [customerCopy, setCustomerCopy] = useState(customer)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={customerCopy.firstName} onChange={(e)=>setCustomerCopy(customerCopy => ({...customerCopy, firstName: e.target.value}))}/>
                        <input value={customerCopy.lastName} onChange={(e)=>setCustomerCopy(customerCopy => ({...customerCopy, lastName: e.target.value}))}/>
                        <button onClick={() => deleteCustomer(customer._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateCustomer(customerCopy._id, customerCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {customerCopy.firstName}
                        {customerCopy.lastName}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Customer;