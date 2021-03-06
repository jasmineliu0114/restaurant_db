const RESTAURANT_URL = "http://localhost:8080/api/restaurants"

export const findAllRestaurants = () =>
    fetch(RESTAURANT_URL)
    .then(response => response.json())

export const findRestaurantById = (id) =>
    fetch(`${RESTAURANT_URL}/${id}`)
    .then(response => response.json())

const deleteRestaurant = (id) =>
    fetch(`${RESTAURANT_URL}/${id}`, {
      method: "DELETE"
    })

export const createRestaurant = (restaurant) =>
    fetch(RESTAURANT_URL, {
        method: 'POST',
        body: JSON.stringify(restaurant),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateRestaurant = (id, restaurant) =>
    fetch(`${RESTAURANT_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(restaurant),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllMenuItems = (restaurantId) => {
  return fetch(`${RESTAURANT_URL}/${restaurantId}/menuItems`).then(response => response.json())
}

export default {
  findAllRestaurants,
  findRestaurantById,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant,
  findAllMenuItems
}