import React, { useState } from "react";
//Importamos elementos de Formik y Yup para el formulario
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Importamos elementos de Firebase
import { auth, firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Input = () => {
  const [cargaVentaExitosa, setCargaVentaExitosa] = useState(false);
  //Referencia a la Base de datos
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  const Refcategorias = firestore.collection(
    `usuario/${auth.currentUser.uid}/categorias`
  );
  const [Categorias] = useCollectionData(Refcategorias, { idField: "id" });

  //Funcion que va a mandar todo a la Base de datos
  const enviarVenta = (values) => {
    Ref.add({
      fecha: values.fecha,
      producto: values.producto,
      precio: values.precio,
      formapago: values.formapago,
      descripcion: values.descripcion,
    });
    setCargaVentaExitosa(true);
    setTimeout(() => {
      setCargaVentaExitosa(false);
    }, 3000);
  };

  return (
    <div className="container bg-light p-1">
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
        onSubmit={(values, { resetForm }) => {
          enviarVenta(values);
          resetForm({ values: "" });
        }}
      >
        <Form>
          <div className="container my-4 text-center">
            <h3 className="my-2">Nueva venta</h3>
            <div className="row my-2">
              <label htmlFor="fecha">Fecha</label>
              <Field name="fecha" type="date" />
              <ErrorMessage name="fecha" />
            </div>
            <div className="row my-2">
              <label htmlFor="producto">Tipo de producto</label>
              <Field name="producto" as="select">
                <option>---</option>
                {Categorias &&
                  Categorias.map((item) => {
                    return (
                      <option value={item.categoria}>{item.categoria}</option>
                    );
                  })}
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
            {cargaVentaExitosa ? (
              <div
                class="alert alert-info d-flex align-items-center p-2 my-1"
                role="alert"
              >
                <div>Venta cargada exitosamente</div>
              </div>
            ) : null}

            <div className="row my-4">
              <button className="btn btn-success" type="submit">
                Cargar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Input;
