import React from "react";

//Firebase
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//Imágenes
import HomeImg from "../../img/img1.png";

//Ésta función sirve para cerrar la sesión de la cuenta de Google
const desloguearGoogle = () => {
  auth.signOut();
};

const Home = () => {
  //Guardamos información de la autenticación
  const [user] = useAuthState(auth);

  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="row">
        <div className="col-sm-6 text-center">
          <img src={HomeImg} alt="Imagen inicio" className="img-fluid" />
        </div>
        <div className="col-sm-6">
          <div className="card text-center p-2" style={{ border: "none" }}>
            <img
              src={user.photoURL}
              className="card-img-top m-auto rounded-circle"
              alt="..."
              style={{ width: "30%" }}
            />
            <div className="card-body">
              <h5 className="card-title">{user.displayName}</h5>
              <p className="card-text">Bienvenido/a a Adminstore</p>
              <p className="card-text">
                No olvides personalizar las categorías de tus productos en el
                menú "Categorías"
              </p>
              <p className="card-text">
                <small className="text-muted">
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
