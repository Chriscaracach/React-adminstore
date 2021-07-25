import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, firestore } from "../../firebase";

//Tareas para cuando veas esto
//Configurar otro botón
//Armar tablas para mostrar
const Acciones = () => {
  //Referencia a la colección proveedores en a base de datos
  const refProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/proveedores`
  );
  //Referencia a la colección comprasproveedores en la base de datos
  const refComprasProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/comprasproveedores`
  );
  //Función que envía los datos de un nuevo proveedor a la base de datos
  const enviarNuevoProveedor = (values) => {
    refProveedores.add({
      proveedor: values.proveedor,
      direccion: values.direccion,
      telefono: values.telefono,
      mail: values.mail,
      listaprecios: values.listaprecios,
    });
    alert("Proveedor cargado exitosamente");
  };
  //Función que envía datos de una nueva compra a un proveedor en la base de datos
  const enviarNuevaCompra = (values) => {
    refComprasProveedores.add({
      fecha: values.fecha,
      proveedor: values.proveedor,
      monto: values.monto,
      formapago: values.formapago,
      descripcion: values.descripcion,
    });
    alert("Compra a proveedor cargada exitosamente");
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
        tabIndex="-1"
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

      <div
        class="modal fade"
        id="modalCompraNueva"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Nueva compra a proveedor
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
                  fecha: "",
                  proveedor: "",
                  monto: "",
                  formapago: "",
                  descripcion: "",
                }}
                /*Esquema de validaciones*/
                validationSchema={Yup.object({
                  fecha: Yup.string().required("Campo incompleto"),
                  proveedor: Yup.string().required("Campo incompleto"),
                  monto: Yup.string().required("Campo incompleto"),
                  formapago: Yup.string(),
                  descripcion: Yup.string(),
                })}
                /*Funcion que se ejecuta cuando se envía el formulario*/
                onSubmit={(values) => {
                  enviarNuevaCompra(values);
                }}
              >
                <Form>
                  <div className="container text-center">
                    <div className="row my-2">
                      <label htmlFor="fecha">Fecha</label>
                      <Field name="fecha" type="date" />
                      <ErrorMessage name="fecha" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="proveedor">Proveedor</label>
                      <Field name="proveedor" as="select">
                        <option>---</option>
                        {/*Acá va un mapeo de los proveedores sacados de l BBDD*/}
                        <option value="Proveedor1">Proveedor 1</option>
                      </Field>
                      <ErrorMessage name="formapago" />
                    </div>
                    <div className="row my-2">
                      <label htmlFor="monto">Monto</label>
                      <Field name="monto" type="text" />
                      <ErrorMessage name="monto" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acciones;
