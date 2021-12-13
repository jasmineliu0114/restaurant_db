import OrderList from "./order-list";
import OrderEditorForm from "./order-editor-form";
import CustomerFormEditor from "../customers/customer-form-editor";
import MenuItemFormEditor from "../menuItems/menuItem-editor-form";
import RestaurantFormEditor from "../restaurants/restaurant-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {

  return (
      <div className="container-fluid">
        <HashRouter>
          <Route path={["/orders", "/"]} exact={true}>
            <OrderList/>
          </Route>
          <Route path="/orders/:id" exact={true}>
            <OrderEditorForm/>
          </Route>
          <Route path="/customers/:id" exact={true}>
            <CustomerFormEditor/>
          </Route>
          <Route path="/menuItems/:id" exact={true}>
            <MenuItemFormEditor/>
          </Route>
          <Route path="/restaurants/:id" exact={true}>
            <RestaurantFormEditor/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
