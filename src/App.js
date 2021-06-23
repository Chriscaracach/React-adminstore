import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

//Componentes
import Nav from "./components/nav";
import Ventas from "./components/ventas/ventas";
import Home from "./components/home/home";
import Login from "./components/login";

const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        {isLogged ? (
          <>
            <Nav></Nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/ventas" component={Ventas}></Route>
            </Switch>
          </>
        ) : (
          <Login></Login>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
