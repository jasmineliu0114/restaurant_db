import restaurantService, { findAllMenuItems } from "./restaurant-service"
const { useState, useEffect } = React;
const { useParams, Link, useHistory } = window.ReactRouterDOM;
const RestaurantFormEditor = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState({})
  useEffect(() => {
    if (id !== "new") {
      findRestaurantById(id)
    }
  }, []);

  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    if (id !== "new") {
      findAllMenuItems(id)
    }
  }, []);

  const findRestaurantById = (id) =>
      restaurantService.findRestaurantById(id)
      .then(restaurant => setRestaurant(restaurant))
  const deleteRestaurant = (id) =>
      restaurantService.deleteRestaurant(id)
      .then(() => history.back())
  const createRestaurant = (restaurant) =>
      restaurantService.createRestaurant(restaurant)
      .then(() => history.back())
  const updateRestaurant = (id, newRestaurant) =>
      restaurantService.updateRestaurant(id, newRestaurant)
      .then(() => history.back())

  const findAllMenuItems = (id) =>
      restaurantService.findAllMenuItems(id)
      .then(menuItems => setMenuItems(menuItems))

  return (
      <div>
        <h2>Restaurant Editor</h2>
        <label>Id</label>
        <input
            className="form-control" value={restaurant.id}/>
        <label>Name</label>
        <input
            className="form-control"
            onChange={(e) => setRestaurant(
                restaurant => ({...restaurant, name: e.target.value}))}
            value={restaurant.name}/>
        <label>Cuisine</label>
        <input
            className="form-control"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, cuisine: e.target.value}))}
            value={restaurant.cuisine}/>
        <label>Open Time</label>
        <input
            className="form-control"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, openTime: e.target.value}))}
            value={restaurant.openTime}/>
        <label>Close Time</label>
        <input
            className="form-control"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, closeTime: e.target.value}))}
            value={restaurant.closeTime}/><br /><br />
        <h2>Restaurant MenuItems</h2>
        <ul>
          {
            menuItems.map(menuItem =>
                <li key={menuItem.id}>
                  <Link to={`/menuItems/${menuItem.id}`}>
                    {menuItem.name}
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
                onClick={() => deleteRestaurant(restaurant.id)}>
          Delete
        </button>
        <button
            onClick={() => createRestaurant(restaurant)}
            className="btn btn-success">
          Create
        </button>
        <button className="btn btn-success"
                onClick={() => updateRestaurant(restaurant.id, restaurant)}>
          Save
        </button>
      </div>
  )
}

export default RestaurantFormEditor