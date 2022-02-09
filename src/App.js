import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
