import React from "react";
//Importamos elementos de Formik y Yup para el formulario
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Importamos elementos de Firebase
import { auth, firestore } from "../../firebase";

const Input = () => {
  //Referencia a la Base de datos
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);

  //Funcion que va a mandar todo a la Base de datos
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
        /*Valores iniciales del formulario*/
        initialValues={{
          fecha: "",
          producto: "",
          precio: "",
          formapago: "",
          descripcion: "",
        }}
        /*Esquema de validaciones*/
        validationSchema={Yup.object({
          fecha: Yup.string().required("Campo incompleto"),
          producto: Yup.string().required("Campo incompleto"),
          precio: Yup.string()
            .max(10, "Demasiados caracteres")
            .required("Campo incompleto"),
          formapago: Yup.string().required("Campo incompleto"),
          descripcion: Yup.string(),
        })}
        /*Funcion que se ejecuta cuando se envía el formulario*/
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
                <option value="Auriculares">Auriculares</option>
                <option value="Cable">Cable</option>
                <option value="Cargador">Cargador celular</option>
                <option value="Cargador notebook">Cargador notebook</option>
                <option value="Funda">Funda</option>
                <option value="Parlante">Parlante</option>
                <option value="Vidrio templado">Vidrio templado</option>
                <option value="Pendrive-memoria">Pendrive / Memoria</option>
                <option value="Servicio técnico">Servicio técnico</option>
                <option value="Otros">Otros (aclarar en descripción)</option>
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
                <option value="Contado">Contado</option>
                <option value="Credito">Crédito</option>
                <option value="Mercadopago">Mercado Pago</option>
                <option value="Debito">Débito</option>
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
