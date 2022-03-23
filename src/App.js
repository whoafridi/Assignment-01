import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail";
import CartProvider from "./context/CartProvider";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/category">
          <Category/>
          </Route>
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
