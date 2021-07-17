import React, { useState } from "react";
//Firebase
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user] = useAuthState(auth);
  const [usuario, setUsuario] = useState(user);
  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="a">
                Usuario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="a">
                Lista de tareas
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Usuario activo</h5>
          <img src={usuario.photoURL} alt="usuario" className="img-fluid" />
          <p className="card-text">{usuario.displayName}</p>
          {/* <a href="a" clasName="btn btn-primary">
            Link a algo
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
