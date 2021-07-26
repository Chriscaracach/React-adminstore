import React from "react";

//Firebase
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import HomeImg from "../../img/img1.png";

//Ésta función sirve para cerrar la sesión de la cuenta de Google
const desloguearGoogle = () => {
  auth.signOut();
};

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="row">
        <div className="col-6">
          <img src={HomeImg} alt="Imagen inicio" className="img-fluid" />
        </div>
        <div className="col-6">
          <div class="card text-center p-2" style={{ border: "none" }}>
            <img
              src={user.photoURL}
              className="card-img-top m-auto rounded-circle"
              alt="..."
              style={{ width: "50%" }}
            />
            <div class="card-body">
              <h5 class="card-title">{user.displayName}</h5>
              <p class="card-text">Bienvenido/a a Adminstore</p>
              <p class="card-text">
                <small class="text-muted">
                  <button className="btn btn-danger" onClick={desloguearGoogle}>
                    Cerrar Sesión
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
