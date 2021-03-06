import { HashRouter, Route, Switch } from "react-router-dom";
import "../src/App.css";

//Componentes
import Nav from "./components/nav";
import Ventas from "./components/ventas/ventas";
import Home from "./components/home/home";
import Login from "./components/login";
import Proveedores from "./components/proveedores/proveedores";
import Categoriasproductos from "./components/categoriasproductos/categoriasproductos";

//Firebase
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  //En éste array se guardan los datos de la autenticación para usarlos después
  const [user] = useAuthState(auth);

  return (
    <HashRouter>
      <div className="App">
        {/*Con el operador ternario mostramos la app si el usuario se autenticó, sino mostramos el login*/}
        {user ? (
          <>
            <Nav></Nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/ventas" component={Ventas}></Route>
              <Route path="/proveedores" component={Proveedores}></Route>
              <Route
                path="/categoriasproductos"
                component={Categoriasproductos}
              ></Route>
            </Switch>
          </>
        ) : (
          <Login></Login>
        )}
      </div>
    </HashRouter>
  );
};

export default App;
