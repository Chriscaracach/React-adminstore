import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
//Firebase
import firebase from "firebase";
import { auth, firestore } from "../../firebase";

//TAREAS PARA CUANDO VEAS ESTO

const Input = () => {
  //State de venta
  //const [Venta, setVenta] = useState();

  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);

  //Funcion que va a mandar todo a la BD
  const enviarVenta = (values) => {
    Ref.add({
      fecha: values.fecha,
      producto: values.producto,
      precio: values.precio,
      formapago: values.formapago,
    });
    console.log("venta cargada");
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ fecha: "", producto: "", precio: "", formapago: "" }}
        onSubmit={(values) => {
          enviarVenta(values);
        }}
      >
        <Form>
          <div className="container text-center">
            <div className="row my-2">
              <label htmlFor="fecha">Fecha</label>
              <Field name="fecha" type="date" />
            </div>
            <div className="row my-2">
              <label htmlFor="producto">Tipo de producto</label>
              <Field name="producto" as="select">
                <option value="cargador">Cargador</option>
                <option value="funda">Funda</option>
              </Field>
            </div>
            <div className="row my-2">
              <label htmlFor="precio">Precio</label>
              <Field name="precio" type="text" />
            </div>
            <div className="row my-2">
              <label htmlFor="formapago">Forma de pago</label>
              <Field name="formapago" as="select">
                <option value="contado">Contado</option>
                <option value="debito">Débito</option>
              </Field>
            </div>
            <div className="row my-5">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Input;
