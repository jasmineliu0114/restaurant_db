const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const MenuItemEditorInline = ({menuItem, deleteMenuItem, updateMenuItem}) => {
    const [menuItemCopy, setMenuItemCopy] = useState(menuItem)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={menuItemCopy.name}
                            onChange={(e)=>setMenuItemCopy(menuItemCopy => ({...menuItemCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={menuItemCopy.description}
                            onChange={(e)=>setMenuItemCopy(menuItemCopy => ({...menuItemCopy, description: e.target.value}))}>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={menuItemCopy.price}
                            onChange={(e)=>setMenuItemCopy(menuItemCopy => ({...menuItemCopy, price: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateMenuItem(menuItemCopy.id, menuItemCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteMenuItem(menuItem.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/menuItems/${menuItemCopy.id}`}>
                            {menuItemCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/menuItems/${menuItemCopy.id}`}>
                            {menuItemCopy.description}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`menuItems/${menuItemCopy.id}`}>
                            {menuItemCopy.price}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default MenuItemEditorInline;