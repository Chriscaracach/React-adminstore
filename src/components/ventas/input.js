import React from "react";
//Fomulario
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Firebase
//import firebase from "firebase";
import { auth, firestore } from "../../firebase";

//TAREAS PARA CUANDO VEAS ESTO
//Cargar tipos de productos
//Embellecer

const Input = () => {
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);

  //Funcion que va a mandar todo a la BD
  const enviarVenta = (values) => {
    Ref.add({
      fecha: values.fecha,
      producto: values.producto,
      precio: values.precio,
      formapago: values.formapago,
      descripcion: values.descripcion,
    });
    alert("Venta cargada exitosamente");
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          fecha: "",
          producto: "",
          precio: "",
          formapago: "",
          descripcion: "",
        }}
        validationSchema={Yup.object({
          fecha: Yup.string().required("Campo incompleto"),
          producto: Yup.string().required("Campo incompleto"),
          precio: Yup.string()
            .max(10, "Demasiados caracteres")
            .required("Campo incompleto"),
          formapago: Yup.string().required("Campo incompleto"),
          descripcion: Yup.string(),
        })}
        onSubmit={(values) => {
          enviarVenta(values);
        }}
      >
        <Form>
          <div className="container w-50 my-4 text-center">
            <h1 className="my-2">Nueva venta</h1>
            <div className="row my-2">
              <label htmlFor="fecha">Fecha</label>
              <Field name="fecha" type="date" />
              <ErrorMessage name="fecha" />
            </div>
            <div className="row my-2">
              <label htmlFor="producto">Tipo de producto</label>
              <Field name="producto" as="select">
                <option>---</option>
                <option value="cargador">Cargador</option>
                <option value="funda">Funda</option>
              </Field>
              <ErrorMessage name="producto" />
            </div>
            <div className="row my-2">
              <label htmlFor="precio">Precio</label>
              <Field name="precio" type="text" />
              <ErrorMessage name="precio" />
            </div>
            <div className="row my-2">
              <label htmlFor="formapago">Forma de pago</label>
              <Field name="formapago" as="select">
                <option>---</option>
                <option value="contado">Contado</option>
                <option value="debito">Débito</option>
              </Field>
              <ErrorMessage name="formapago" />
            </div>
            <div className="row my-2">
              <label htmlFor="descripcion">Descripcion</label>
              <Field name="descripcion" as="textarea" />
              <ErrorMessage name="descripcion" />
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
