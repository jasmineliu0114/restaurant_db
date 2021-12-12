const ORDER_URL = "http://localhost:8080/api/orders"

export const findAllOrders = () =>
    fetch(ORDER_URL)
    .then(response => response.json())

export const findOrderById = (id) =>
    fetch(`${ORDER_URL}/${id}`)
    .then(response => response.json())

const deleteOrder = (id) =>
    fetch(`${ORDER_URL}/${id}`, {
      method: "DELETE"
    })

export const createOrder = (order) =>
    fetch(ORDER_URL, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateOrder = (id, order) =>
    fetch(`${ORDER_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllOrders,
  findOrderById,
  deleteOrder,
  createOrder,
  updateOrder,
}