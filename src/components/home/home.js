import React from "react";
//Firebase
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user] = useAuthState(auth);

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
              <a className="nav-link" href="b">
                Lista de tareas
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Usuario activo</h5>
          <img src={user.photoURL} alt="usuario" className="img-fluid" />
          <p className="card-text">{user.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
