import MenuItemEditorInline from "./menuItem-editor-inline";
// import menuItemService, {
//   createMenuItemForRestaurant, findAllMenuItems,
//   findMenuItemsForRestaurant
// } from "./menuItem-service"

import menuItemService from "./menuItem-service"

import restaurantService from "../restaurants/restaurant-service";

const MENUITEM_URL = "http://localhost:8080/api/menuItems"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const MenuItemList = () => {
  const [menuItems, setMenuItems] = useState([])
  const [newMenuItem, setNewMenuItem] = useState({})
  const {restaurantId} = useParams()
  useEffect(() => {
    findMenuItemsForRestaurant(restaurantId)
  }, [])
  useEffect(() => {
    findAllMenuItems()
  }, [])

  const createMenuItemForRestaurant = (menuItem) =>
      menuItemService.createMenuItemForRestaurant(restaurantId, menuItem)
      .then(menuItem => {
        setNewMenuItem({name: ''})
        setMenuItems(menuItems => ([...menuItems, menuItem]))
      })
  const updateMenuItem = (id, newMenuItem) =>
      menuItemService.updateMenuItem(id, newMenuItem)
      .then(menuItem => setMenuItems(menuItems => (menuItems.map(
          menuItem => menuItem.id === id ? newMenuItem : menuItem))))
  const findAllMenuItems = () =>
      restaurantService.findAllMenuItems()
      .then(menuItems => setMenuItems(menuItems))
  const findMenuItemsForRestaurant = (restaurantId) =>
      menuItemService.findMenuItemsForRestaurant(restaurantId)
      .then(menuItems => setMenuItems(menuItems))
  const deleteMenuItem = (id) =>
      menuItemService.deleteMenuItem(id)
      .then(menuItems => setMenuItems(
          menuItems => menuItems.filter(menuItem => menuItem.id !== id)))
  return (
      <div>
        <h2>
          <Link onClick={() => history.back()}>
            <i className="fas fa-arrow-left margin-right-10px"></i>
          </Link>
          MenuItems
        </h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <input placeholder="MenuItem Name"
                       title="Please enter a name for the menu item"
                       className="form-control"
                       value={newMenuItem.title}
                       onChange={(e) => setNewMenuItem(newMenuItem => ({
                         ...newMenuItem,
                         name: e.target.value
                       }))}/>
              </div>
              <div className="col-2">
                <i className="fas float-right fa-plus fa-2x"
                   onClick={() => createMenuItemForRestaurant(newMenuItem)}></i>
              </div>
            </div>
          </li>
          {
            menuItems.map(menuItem =>
                <li key={menuItem.id} className="list-group-item">
                  <MenuItemEditorInline key={menuItem._id}
                                        updateMenuItem={updateMenuItem}
                                        deleteMenuItem={deleteMenuItem}
                                        menuItem={menuItem}/>
                </li>)
          }
        </ul>
      </div>
  )
}

export default MenuItemList;