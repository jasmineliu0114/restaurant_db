import restaurantService from "./restaurant-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const RestaurantEditorForm = () => {
  const [restaurant, setRestaurant] = useState({})
  const {id} = useParams()
  // const history = useHistory()
  useEffect(() => {
    findRestaurantById(id)
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

  return (
      <div>
        <h2>
          Restaurant Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control margin-bottom-10px"
            readOnly={true}
            value={restaurant.id}/>
        <label>Name</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setRestaurant(
                restaurant => ({...restaurant, name: e.target.value}))}
            value={restaurant.name}/>
        <label>Cuisine</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, cuisine: e.target.value}))}
            value={restaurant.cuisine}/>
        <label>Open Time</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, openTime: e.target.value}))}
            value={restaurant.openTime}/>
        <label>Close Time</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setRestaurant(restaurant => ({...restaurant, closTime: e.target.value}))}
            value={restaurant.closeTime}/>
        <br/>

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
        <button className="btn btn-success"
                onClick={() => createRestaurant(restaurant)}>
          Create
        </button>
        <button className="btn btn-success"
                onClick={() => updateRestaurant(restaurant.id, restaurant)}>
          Save
        </button>
      </div>
  )
}

export default RestaurantEditorForm