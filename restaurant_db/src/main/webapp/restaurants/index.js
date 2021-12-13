import RestaurantList from "../restaurants/restaurant-list";
import RestaurantEditorForm from "../restaurants/restaurant-editor-form";
import MenuItemEditorForm from "../menuItems/menuItem-editor-form";
import OrderEditorForm from "../orders/order-editor-form";
import CustomerFormEditor from "../customers/customer-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
  
  return (
      <div className="container-fluid">
        <HashRouter>
          <Route path={["/restaurants", "/"]} exact={true}>
            <RestaurantList/>
          </Route>
          <Route path="/restaurants/:id" exact={true}>
            <RestaurantEditorForm/>
          </Route>
          <Route path="/menuItems/:id" exact={true}>
            <MenuItemEditorForm/>
          </Route>
          <Route path="/customers/:id" exact={true}>
            <CustomerFormEditor/>
          </Route>
          <Route path="/orders/:id" exact={true}>
            <OrderEditorForm/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
