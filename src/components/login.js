import React from "react";
//Importamos Firebase
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  //Ésta función sirve para iniciar sesión con Google
  const loguearConGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div className="container text-center border border-2 rounded my-3 p-3 w-50 h-50">
      <img src="../img/logo.png" alt="alt" className="img-fluid" />{" "}
      {/*Todavía hay un error con las img, para solucionar mas adelante*/}
      <button
        type="button"
        className="btn btn-success btn-lg my-2"
        onClick={loguearConGoogle}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;
