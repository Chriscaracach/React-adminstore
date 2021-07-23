import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, firestore } from "../../firebase";

//Tareas para cuando veas esto
//Configurar otro botón
//Armar tablas para mostrar
const Acciones = () => {
  const Ref = firestore.collection(
    `usuario/${auth.currentUser.uid}/proveedores`
  );
  const enviarNuevoProveedor = (values) => {
    Ref.add({
      proveedor: values.proveedor,
      direccion: values.direccion,
      telefono: values.telefono,
      mail: values.mail,
      listaprecios: values.listaprecios,
    });
    alert("Proveedor cargado exitosamente");
  };
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#modalProveedorNuevo"
          >
            Nuevo proveedor
          </button>
        </li>
        <li className="list-group-item">
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#modalCompraNueva"
          >
            Nueva compra
          </button>
        </li>
      </ul>
      {/*Modales*/}
      <div
        class="modal fade"
        id="modalProveedorNuevo"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Nuevo proveedor
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <Formik
                /*Valores iniciales del formulario*/
                initialValues={{
                  proveedor: "",
                  direccion: "",
                  telefono: "",
                  mail: "",
                  listaprecios: "",
                }}
                /*Esquema de validaciones*/
                validationSchema={Yup.object({
                  proveedor: Yup.string().required("Campo incompleto"),
                  direccion: Yup.string().required("Campo incompleto"),
                  telefono: Yup.string().required("Campo incompleto"),
                  mail: Yup.string().email(),
                  listaprecios: Yup.string(),
                })}
                /*Funcion que se ejecuta cuando se envía el formulario*/
                onSubmit={(values) => {
                  enviarNuevoProveedor(values);
                }}
              >
                <Form>
                  <div className="container text-center">
                    <div className="row my-2">
                      <label htmlFor="proveedor">Proveedor</label>
                      <Field name="proveedor" type="text" />
                      <ErrorMessage name="proveedor" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="direccion">Dirección</label>
                      <Field name="direccion" type="text" />
                      <ErrorMessage name="direccion" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="telefono">Teléfono</label>
                      <Field name="telefono" type="text" />
                      <ErrorMessage name="telefono" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="mail">E-mail</label>
                      <Field name="mail" type="email" />
                      <ErrorMessage name="mail" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="listaprecios">
                        Lista de precios / Sitio web
                      </label>
                      <Field name="listaprecios" type="text" />
                      <ErrorMessage name="listaprecios" />
                    </div>
                    <div className="row my-5">
                      <button type="submit">Enviar</button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acciones;
