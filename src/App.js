import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Nav from "./components/nav";
import Input from "./components/ventas/input";
import List from "./components/ventas/list";
import Home from "./components/home/home";
import Login from "./components/login";

//Firebase
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  //En éste array se guardan los datos de la autenticación para usarlos después
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <div className="App">
        {/*Con el operador ternario mostramos la app si el usuario se autenticó, sino mostramos el login*/}
        {user ? (
          <>
            <Nav></Nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/input" component={Input}></Route>
              <Route path="/list" component={List}></Route>
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
