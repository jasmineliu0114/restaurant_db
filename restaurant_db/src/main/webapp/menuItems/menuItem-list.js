const {Link, useHistory} = window.ReactRouterDOM;

import menuItemService from "./menuItem-service"

const {useState, useEffect} = React;

const MenuItemList = () => {
  const history = useHistory()
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    findAllMenuItems()
  }, [])

  const findAllMenuItems = () =>
      menuItemService.findAllMenuItems()
      .then(menuItems => setMenuItems(menuItems))

  return (
      <div>
        <h2>Menu Item List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/menuItems/new")}>
          Add Menu Item
        </button>
        <ul className="list-group">
          {
            menuItems.map(menuItem =>
                <li className = "list-group-item"
                    key={menuItem.id}>
                  <Link to={`/menuItems/${menuItem.id}`}>
                    {menuItem.name}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default MenuItemList;