import React from "react";
//Firebase
import firebase from "firebase/app";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"; //Mandar ésto a Redux??

const loguearConGoogle = () => {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
};

const Login = () => {
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
