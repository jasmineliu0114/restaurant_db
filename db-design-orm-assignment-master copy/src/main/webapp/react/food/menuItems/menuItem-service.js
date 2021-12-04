const RESTAURANT_URL = "http://localhost:8080/api/restaurants"
const MENUITEM_URL = "http://localhost:8080/api/menuItems"

export const createMenuItemForRestaurant = (restaurantId, menuItem) =>
    fetch(`${RESTAURANT_URL}/${restaurantId}/menuItems`, {
        method: 'POST',
        body: JSON.stringify(menuItem),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createMenuItem = (menuItem) =>
    fetch(`${MENUITEM_URL}/${id}`, {
      method: 'POST',
      body: JSON.stringify(menuItem),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllMenuItems = () =>
    fetch(MENUITEM_URL)
    .then(response => response.json())

export const findMenuItemsForRestaurant = (restaurantID) =>
    fetch(`${RESTAURANT_URL}/${restaurantID}/menuItems`)
        .then(response => response.json())

export const findMenuItemById = (id) =>
    fetch(`${MENUITEM_URL}/${id}`)
        .then(response => response.json())

export const updateMenuItem = (id, menuItem) =>
    fetch(`${MENUITEM_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(menuItem),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteMenuItem = (id) =>
    fetch(`${MENUITEM_URL}/${id}`, {
        method: "DELETE"
    })

export default {
  createMenuItemForRestaurant,
  createMenuItem,
  findAllMenuItems,
  findMenuItemsForRestaurant,
  findMenuItemById,
  updateMenuItem,
  deleteMenuItem,
}