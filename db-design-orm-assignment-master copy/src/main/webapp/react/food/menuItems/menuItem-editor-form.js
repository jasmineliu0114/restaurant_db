import menuItemService, {createMenuItem} from "./menuItem-service"
import customerService from "../../social/customers/customer-service";

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const MenuItemEditorForm = () => {
  const [menuItem, setMenuItem] = useState({})
  const {menuItemId} = useParams()
  // const history = useHistory()
  useEffect(() => {
    findMenuItemById(menuItemId)
  }, []);

  const findMenuItemById = (id) =>
      menuItemService.findMenuItemById(id)
      .then(menuItem => setMenuItem(menuItem))
  const updateMenuItem = (id, newMenuItem) =>
      menuItemService.updateMenuItem(id, newMenuItem)
      .then(() => history.back())
  const deleteMenuItem = (id) =>
      menuItemService.deleteMenuItem(id)
      .then(() => history.back())
  const createMenuItem = (menuItem) =>
      menuItemService.createMenuItem(menuItem)
      .then(() => history.back())

  return (
      <div>
        <h2>
          Menu Item Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control"
            // readOnly={true}
            value={menuItem.id}/>
        <label>Name</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(
                menuItem => ({...menuItem, name: e.target.value}))}
            value={menuItem.name}/>
        <label>Description</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(menuItem => ({
              ...menuItem,
              description: e.target.value}))}
            value={menuItem.description}/>
        <label>Price</label>
        <input
            className="form-control"
            onChange={(e) => setMenuItem(
                menuItem => ({...menuItem, price: e.target.value}))}
            value={menuItem.price}/>
        <br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.back()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteMenuItem(menuItem.id)}>
          Delete
        </button>
        <button className="btn btn-success"
                onClick={() => updateMenuItem(menuItem.id, menuItem)}>
          Save
        </button>
        <button
            onClick={() => createMenuItem(menuItem)}
            className="btn btn-danger btn-block margin-left-10px">Create</button>

      </div>
  )
}

export default MenuItemEditorForm