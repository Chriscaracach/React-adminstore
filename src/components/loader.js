import React from "react";

const Loader = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

export default Loader;
