import orderService, {createOrder} from "./order-service"

const {useState, useEffect} = React
const {useParams, Link, useHistory} = window.ReactRouterDOM;

const OrderEditorForm = () => {
  const {id} = useParams()
  const [order, setOrder] = useState({})

  useEffect(() => {
    if (id !== "new") {
      findOrderById(id)
    }
  }, []);

  const findOrderById = (id) =>
      orderService.findOrderById(id)
      .then(order => setOrder(order))
  const deleteOrder = (id) =>
      orderService.deleteOrder(id)
      .then(() => history.back())
  const createOrder = (order) =>
      orderService.createOrder(order)
      .then(() => history.back())
  const updateOrder = (id, newOrder) =>
      orderService.updateOrder(id, newOrder)
      .then(() => history.back())

  return (
      <div>
        <h2>
          Order Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control" value={order.id}/><br/>
        <label>Order Time</label>
        <input
            className="form-control"
            onChange={(e) => setOrder(
                order => ({...order, orderTime: e.target.value}))}
            value={order.orderTime}/><br/>
        <label>Special Instructions</label>
        <input
            className="form-control"
            onChange={(e) => setOrder(order => ({
              ...order,
              specialInstructions: e.target.value}))}
            value={order.specialInstructions}/><br/>
        <label>Customer ID</label>
        <input
            className="form-control"
            onChange={(e) =>
                setOrder(order =>
                    ({ ...order, customerId: e.target.value }))}
            value={order.customerId} /><br/>
        <label>MenuItem ID</label>
        <input
            className="form-control"
            onChange={(e) =>
                setOrder(order =>
                    ({ ...order, menuId: e.target.value }))}
            value={order.menuId} /><br /><br />

        <h2>Order Customer</h2>
        <Link to={`/customers/${order.customerId}`}>
          Customer
        </Link> <br /><br />

        <h2>Order MenuItem</h2>
        <Link to={`/menuItems/${order.menuId}`}>
          MenuItem
        </Link> <br /><br />

        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteOrder(order.id)}>
          Delete
        </button>
        <button
            onClick={() => createOrder(order)}
            className="btn btn-success">
          Create
        </button>
        <button className="btn btn-success"
                onClick={() => updateOrder(order.id, order)}>
          Save
        </button>
      </div>
  )
}

export default OrderEditorForm