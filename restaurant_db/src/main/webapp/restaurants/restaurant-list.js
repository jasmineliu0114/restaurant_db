const {Link, useHistory} = window.ReactRouterDOM;

import restaurantService from "./restaurant-service"


const {useState, useEffect} = React;

const RestaurantList = () => {
  const history = useHistory()
  const [restaurants, setRestaurants] = useState([])
  

  useEffect(() => {
    findAllRestaurants()
  }, [])

  const findAllRestaurants = () =>
        restaurantService.findAllRestaurants()
            .then(restaurants => setRestaurants(restaurants))


  return (
      <div>
        <h2>Restaurant List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/restaurants/new")}>
          Add Restaurant
        </button>
        <ul className="list-group">
          {
            restaurants.map(restaurant =>
                <li className = "list-group-item"
                    key={restaurant.id}>
                  <Link to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default RestaurantList;