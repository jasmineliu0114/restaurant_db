import menuItemService, { findAllOrders } from "./menuItem-service"
const { useState, useEffect } = React;
const { useParams, Link, useHistory } = window.ReactRouterDOM;
const MenuItemFormEditor = () => {
  const { id } = useParams()
  const [menuItem, setMenuItem] = useState({})
  useEffect(() => {
    if (id !== "new") {
      findMenuItemById(id)
    }
  }, []);

  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (id !== "new") {
      findAllOrders(id)
    }
  }, []);

  const findMenuItemById = (id) =>
      menuItemService.findMenuItemById(id)
      .then(menuItem => setMenuItem(menuItem))
  const deleteMenuItem = (id) =>
      menuItemService.deleteMenuItem(id)
      .then(() => history.back())
  const createMenuItem = (menuItem) =>
      menuItemService.createMenuItem(menuItem)
      .then(() => history.back())
  const updateMenuItem = (id, newMenuItem) =>
      menuItemService.updateMenuItem(id, newMenuItem)
      .then(() => history.back())

  const findAllOrders = (id) =>
      menuItemService.findAllOrders(id)
      .then(orders => setOrders(orders))

  return (
      <div>
        <h2>Menu Item Editor</h2>
        <label>Id</label>
        <input
            className="form-control" value={menuItem.id}/><br/>
        <label>Name</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(
                menuItem => ({...menuItem, name: e.target.value}))}
            value={menuItem.name}/><br/>
        <label>Description</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(menuItem => ({
              ...menuItem,
              description: e.target.value
            }))}
            value={menuItem.description}/><br/>
        <label>Price</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(
                menuItem => ({...menuItem, price: e.target.value}))}
            value={menuItem.price}/><br/>
        <label>Restaurant ID</label>
        <input
            className="form-control"
            onChange={(e) =>
                setMenuItem(menuItem =>
                    ({ ...menuItem, restaurantId: e.target.value }))}
            value={menuItem.restaurantId} /><br /><br />
        <h2>MenuItem Orders</h2>
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
                onClick={() => deleteMenuItem(menuItem.id)}>
          Delete
        </button>
        <button
            onClick={() => createMenuItem(menuItem)}
            className="btn btn-success">
          Create
        </button>
        <button className="btn btn-success"
                onClick={() => updateMenuItem(menuItem.id, menuItem)}>
          Save
        </button>
        <Link to={`/restaurants/${menuItem.restaurantId}`}>
          <button>
            View Restaurant
          </button>
        </Link>
      </div>
  )
}

export default MenuItemFormEditor