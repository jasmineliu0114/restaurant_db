const MENUITEMS_URL = "http://localhost:8080/api/menuItems"

export const findAllMenuItems= () =>
    fetch(MENUITEMS_URL).then(response => response.json())


export const findMenuItemById = (menuItemId) => {
  return fetch(`${MENUITEMS_URL}/${menuItemId}`).then(response => response.json())
}

export const createMenuItem = (menuItem) =>
    fetch(MENUITEMS_URL, {
      method: 'POST',
      body: JSON.stringify(menuItem),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const deleteMenuItem = (menuItemId) => {
  return fetch(`${MENUITEMS_URL}/${menuItemId}`, {
    method: 'DELETE'
  })
}

export const updateMenuItem = (menuItemId, newMenuItem) => {
  return fetch(`${MENUITEMS_URL}/${menuItemId}`, {
    method: 'PUT',
    body: JSON.stringify(newMenuItem),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => {
    return response.json()})
}

export const findAllOrders = (menuItemId) => {
  return fetch(`${MENUITEMS_URL}/${menuItemId}/orders`).then(response => response.json())
}

export default {
  updateMenuItem,
  deleteMenuItem,
  createMenuItem,
  findAllMenuItems,
  findMenuItemById,
  findAllOrders
}