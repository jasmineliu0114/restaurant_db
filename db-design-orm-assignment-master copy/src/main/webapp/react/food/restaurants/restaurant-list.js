import RestaurantEditorInline from "./restaurant-editor-inline";
import restaurantService from "./restaurant-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const RestaurantList = () => {
    const history = useHistory()
    const [restaurants, setRestaurants] = useState([])
    const [newRestaurant, setNewRestaurant] = useState({})
    useEffect(() => {
        findAllRestaurants()
    }, [])
    const createRestaurant = (restaurant) =>
        restaurantService.createRestaurant(restaurant)
            .then(restaurant => {
                setNewRestaurant({title:''})
                setRestaurants(restaurants => ([...restaurants, restaurant]))
            })
    const updateRestaurant = (id, newRestaurant) =>
        restaurantService.updateRestaurant(id, newRestaurant)
            .then(restaurant => setRestaurants(restaurants => (restaurants.map(restaurant => restaurant.id === id ? newRestaurant : restaurant))))
    const findAllRestaurants = () =>
        restaurantService.findAllRestaurants()
            .then(restaurants => setRestaurants(restaurants))
    const deleteRestaurant = (id) =>
        restaurantService.deleteRestaurant(id)
            .then(restaurants => setRestaurants(restaurants => restaurants.filter(restaurant => restaurant.id !== id)))
    return(
        <div>
            <h2>Restaurants</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Restaurant Title"
                                   title="Please enter a title for the restaurant" className="form-control" value={newRestaurant.title}
                                   onChange={(e) => setNewRestaurant(newRestaurant => ({...newRestaurant, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createRestaurant(newRestaurant)}></i>
                        </div>
                    </div>
                </li>
            {
                restaurants.map(restaurant =>
                    <li key={restaurant.id} className="list-group-item">
                        <RestaurantEditorInline key={restaurant._id}
                                                updateRestaurant={updateRestaurant}
                                                deleteRestaurant={deleteRestaurant}
                                                restaurant={restaurant}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default RestaurantList;