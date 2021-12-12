import CustomerList from "./customer-list";
import CustomerFormEditor from "./customer-form-editor";
import OrderEditorForm from "../orders/order-editor-form";
import RestaurantFormEditor from "../restaurants/restaurant-editor-form";
import MenuItemFormEditor from "../menuItems/menuItem-editor-form";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/customers", "/"]} exact={true}>
                    <CustomerList/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderEditorForm/>
                </Route>
                <Route path="/restaurants/:id" exact={true}>
                    <RestaurantFormEditor/>
                </Route>
                <Route path="/menuItems/:id" exact={true}>
                    <MenuItemFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}
export default App;