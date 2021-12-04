const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const RestaurantEditorInline = ({restaurant, deleteRestaurant, updateRestaurant}) => {
    const [restaurantCopy, setRestaurantCopy] = useState(restaurant)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={restaurantCopy.name}
                            onChange={(e)=>setRestaurantCopy(restaurantCopy => ({...restaurantCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={restaurantCopy.cuisine}
                            onChange={(e)=>setRestaurantCopy(restaurantCopy => ({...restaurantCopy, cuisine: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={restaurantCopy.openTime}
                            onChange={(e)=>setRestaurantCopy(restaurantCopy => ({...restaurantCopy, openTime: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={restaurantCopy.closeTime}
                            onChange={(e)=>setRestaurantCopy(restaurantCopy => ({...restaurantCopy, closeTime: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/restaurants/${restaurantCopy.id}/menuItems`}>
                            MenuItems
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateRestaurant(restaurantCopy.id, restaurantCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteRestaurant(restaurant.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/restaurants/${restaurantCopy.id}`}>
                            {restaurantCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/restaurants/${restaurantCopy.id}`}>
                            {restaurantCopy.cuisine}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/restaurants/${restaurantCopy.id}`}>
                            {restaurantCopy.openTime}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/restaurants/${restaurantCopy.id}`}>
                            {restaurantCopy.closeTime}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/restaurants/${restaurantCopy.id}/menuItems`}>
                            MenuItems
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default RestaurantEditorInline;