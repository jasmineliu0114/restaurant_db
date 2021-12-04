import RestaurantList from "./restaurants/restaurant-list";
import MenuItemList from "./menuItems/menuItem-list";
import RestaurantEditorForm from "./restaurants/restaurant-editor-form";
import MenuItemEditorForm from "./menuItems/menuItem-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/restaurants", "/"]} exact={true}>
                    <RestaurantList/>
                </Route>
                <Route path="/restaurants/:id" exact={true}>
                    <RestaurantEditorForm/>
                </Route>
                <Route path="/restaurants/:restaurantId/menuItems" exact={true}>
                    <MenuItemList/>
                </Route>
                <Route path="/menuItems/:menuItemId" exact={true}>
                    <MenuItemEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
