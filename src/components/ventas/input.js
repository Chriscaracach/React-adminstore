import React from "react";

const Input = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h1>Nueva venta</h1>
      </div>
      <form>
        <div className="container my-2 text-center border p-2">
          <div className="row align-items-center">
            <div className="col-2">
              <input type="date" className="form-control" />
            </div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Categoría del producto</option>
                <option value="1">Cargador</option>
                <option value="2">Servicio técnico</option>
                <option value="3">Funda</option>
              </select>
            </div>
            <div className="col-2">
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div className="col-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Forma de pago</option>
                <option value="1">Efectivo</option>
                <option value="2">Débito</option>
                <option value="2">Crédito</option>
                <option value="2">Mercado Pago</option>
              </select>
            </div>
            <div className="col-2">
              <button className="btn">
                <i class="bi bi-check-circle h1"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;
