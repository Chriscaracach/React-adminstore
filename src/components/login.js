import React from "react";
//Importamos Firebase
import firebase from "firebase/app";
import { auth } from "../firebase";
import HomeImg from "../img/logo.png";

const Login = () => {
  //Ésta función sirve para iniciar sesión con Google
  const loguearConGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div className="container text-center border border-2 rounded my-3 p-3 w-50 h-50">
      <div className="row my-2">
        <div className="col-5">
          <img
            src={HomeImg}
            alt="Imagen Home"
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="col-7">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="small">Llevá un control de tus ventas</p>
            </li>
            <li className="list-group-item">
              <p className="small">
                Registrá tus proveedores y las compras que hacés
              </p>
            </li>
            <li className="list-group-item">
              <p className="small">Visualizá estadísticas de tu negocio</p>
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-success btn-lg my-2 d-block mx-auto"
        onClick={loguearConGoogle}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;
