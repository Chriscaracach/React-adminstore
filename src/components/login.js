import React from "react";
//Firebase
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = ({ setUsuarioLogueado }) => {
  const loguearConGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-primary btn-lg my-5"
        onClick={loguearConGoogle}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;
