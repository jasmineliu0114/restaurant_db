import Customers from "./customers";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Customers/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
