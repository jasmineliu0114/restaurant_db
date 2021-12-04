import CustomerList from "./social/customers/customer-list";
import CustomerFormEditor from "./social/customers/customer-form-editor";
import RestaurantList from "./food/restaurants/restaurant-list";
import RestaurantEditorForm from "./food/restaurants/restaurant-editor-form";
import MenuItemList from "./food/menuItems/menuItem-list";
import MenuItemEditorForm from "./food/menuItems/menuItem-editor-form";

// import ProductList from "./products/product-list";
// import ProductFormEditor from "./products/product-form-editor";
// import OrderList from "./orders/order-list";
// import OrderFormEditor from "./orders/order-form-editor";
// import Warehouse_itemFormEditor from "./warehouse_items/warehouse_item-form-editor";
// import Warehouse_itemList from "./warehouse_items/warehouse_item-list";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
  return (
      <div>
        <HashRouter>
          <Route path={["/customers", "/"]} exact={true}>
            <CustomerList/>
          </Route>
          <Route path="/customers/:id" exact={true}>
            <CustomerFormEditor/>
          </Route>

          <Route path={["/restaurants", "/"]} exact={true}>
            <RestaurantList/>
          </Route>
          <Route path="/restaurants/:id" exact={true}>
            <RestaurantEditorForm/>
          </Route>
          <Route path="/restaurants/:restaurantId/menuItems" exact={true}>
            <MenuItemList/>
          </Route>

          <Route path={["/menuItems", "/"]} exact={true}>
            <MenuItemList/>
          </Route>
          <Route path="/menuItems/:id" exact={true}>
            <MenuItemEditorForm/>
          </Route>
          {/*<Route path={["/orders", "/"]} exact={true}>*/}
          {/*  <OrderList/>*/}
          {/*</Route>*/}
          {/*<Route path="/orders/:id" exact={true}>*/}
          {/*  <OrderFormEditor/>*/}
          {/*</Route>*/}

          {/*<Route path={["/warehouseItems", "/"]} exact={true}>*/}
          {/*  <Warehouse_itemList/>*/}
          {/*</Route>*/}
          {/*<Route path="/warehouseItems/:id" exact={true}>*/}
          {/*  <Warehouse_itemFormEditor/>*/}
          {/*</Route>*/}
        </HashRouter>
      </div>
  );
}
export default App;