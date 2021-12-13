import MenuItemList from "./menuItem-list";
import MenuItemEditorForm from "./menuItem-editor-form";
import RestaurantEditorForm from "../restaurants/restaurant-editor-form";
import OrderEditorForm from "../orders/order-editor-form";
import CustomerFormEditor from "../customers/customer-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/menuItems", "/"]} exact={true}>
                    <MenuItemList/>
                </Route>
                <Route path="/menuItems/:id" exact={true}>
                    <MenuItemEditorForm/>
                </Route>
                <Route path="/restaurants/:id" exact={true}>
                    <RestaurantEditorForm/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderEditorForm/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
