import React, { useState } from "react";
//Importamos elementos de Formik y Yup para los formularios
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Importamos elementos de Firebase
import { auth, firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
//Importamos React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

//Componente Acciones
const Acciones = () => {
  //State para controlar cuándo se cierran/abren los modales
  const [showProveedores, setShowProveedores] = useState(false);
  const [showCompras, setShowCompras] = useState(false);
  const [cargaProveedorExitosa, setCargaProveedorExitosa] = useState(false);
  const [cargaCompraExitosa, setCargaCompraExitosa] = useState(false);
  const [proveedorExistente, setProveedorExistente] = useState(false);
  //Funciones para manejar el estado
  const handleCloseProveedores = () => setShowProveedores(false);
  const handleShowProveedores = () => setShowProveedores(true);
  const handleCloseCompras = () => setShowCompras(false);
  const handleShowCompras = () => setShowCompras(true);
  //Referencia a la colección proveedores en a base de datos
  const refProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/proveedores`
  );
  //Referencia a la colección comprasproveedores en la base de datos
  const refComprasProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/comprasproveedores`
  );
  //Referencia para obtener la lista de proveedores y mostrarla en el select
  let [Proveedores] = useCollectionData(refProveedores, { idField: "id" });
  //Función que envía los datos de un nuevo proveedor a la base de datos
  const enviarNuevoProveedor = (values) => {
    //Validamos la existencia previa del proveedor en la base de datos con filter
    let fil = Proveedores.filter((item) => {
      return values.proveedor === item.proveedor;
    });
    //si filter devuelve un array vacío (o sea, el proveedor no existe), se envía el nuevo proveedor a la base de datos
    if (fil.length === 0) {
      refProveedores.add({
        proveedor: values.proveedor,
        direccion: values.direccion,
        telefono: values.telefono,
        mail: values.mail,
        listaprecios: values.listaprecios,
      });
      //Manejo de modales y mensajes de carga exitosa
      handleCloseProveedores();
      setCargaProveedorExitosa(true);
      setTimeout(() => {
        setCargaProveedorExitosa(false);
      }, 3000);
    } else {
      //Mensaje de proveedor existente
      setProveedorExistente(true);
      setTimeout(() => {
        setProveedorExistente(false);
      }, 3000);
    }
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
    //Manejo de modales y mensajes de carga exitosa
    handleCloseCompras();
    setCargaCompraExitosa(true);
    setTimeout(() => {
      setCargaCompraExitosa(false);
    }, 3000);
  };
  return (
    <div className="container">
      <div className="container">
        <button
          type="button"
          className="btn btn-success my-1 w-100 proveedores__acciones__button"
          data-bs-toggle="modal"
          data-bs-target="#modalProveedorNuevo"
          onClick={handleShowProveedores}
        >
          Nuevo proveedor
        </button>
        <button
          type="button"
          className="btn btn-success my-1 w-100 proveedores__acciones__button"
          data-bs-toggle="modal"
          data-bs-target="#modalCompraNueva"
          onClick={handleShowCompras}
        >
          Nueva compra
        </button>

        {
          /*Mensajes de carga exitosa*/
          cargaProveedorExitosa ? (
            <div
              class="alert alert-info d-flex align-items-center p-2 my-1"
              role="alert"
            >
              <i class="bi bi-check-circle mx-1"></i>
              <div>Proveedor cargado exitosamente</div>
            </div>
          ) : null
        }
        {cargaCompraExitosa ? (
          <div
            class="alert alert-info d-flex align-items-center p-2 my-1"
            role="alert"
          >
            <i class="bi bi-check-circle mx-1"></i>
            <div>Compra registrada exitosamente</div>
          </div>
        ) : null}
      </div>

      <>
        <Modal
          show={showProveedores}
          onHide={handleCloseProveedores}
          backdrop="static"
          keyboard={false}
        >
          <div className="modal-dialog w-75">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Nuevo proveedor
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseProveedores}
                ></button>
              </div>
              <div className="modal-body">
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
                    telefono: Yup.number().required("Campo incompleto"),
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
                        <ErrorMessage
                          name="proveedor"
                          render={(msg) => (
                            <div className="errormessage">{msg}</div>
                          )}
                        />
                      </div>
                      <div className="row my-2">
                        <label htmlFor="direccion">Dirección</label>
                        <Field name="direccion" type="text" />
                        <ErrorMessage
                          name="direccion"
                          render={(msg) => (
                            <div className="errormessage">{msg}</div>
                          )}
                        />
                      </div>
                      <div className="row my-2">
                        <label htmlFor="telefono">Teléfono</label>
                        <Field name="telefono" type="text" />
                        <ErrorMessage
                          name="telefono"
                          render={(msg) => (
                            <div className="errormessage">{msg}</div>
                          )}
                        />
                      </div>
                      <div className="row my-2">
                        <label htmlFor="mail">E-mail</label>
                        <Field name="mail" type="email" />
                        <ErrorMessage
                          name="mail"
                          render={(msg) => (
                            <div className="errormessage">{msg}</div>
                          )}
                        />
                      </div>
                      <div className="row my-2">
                        <label htmlFor="listaprecios">
                          Lista de precios / Sitio web
                        </label>
                        <Field name="listaprecios" type="text" />
                        <ErrorMessage
                          name="listaprecios"
                          render={(msg) => (
                            <div className="errormessage">{msg}</div>
                          )}
                        />
                      </div>
                      {
                        /*Mensaje de proveedor existente*/
                        proveedorExistente ? (
                          <div
                            className="alert alert-danger d-flex align-items-center p-2 my-1"
                            role="alert"
                          >
                            <i className="bi bi-x-circle mx-1"></i>
                            <div>El proveedor ya existe</div>
                          </div>
                        ) : null
                      }
                      <div className="row my-5">
                        <button type="submit">Enviar</button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={showCompras}
          onHide={handleCloseCompras}
          backdrop="static"
          keyboard={false}
        >
          <div className="modal-dialog w-75">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Nueva compra a proveedor
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseCompras}
                ></button>
              </div>

              <div className="modal-body">
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
                    monto: Yup.number()
                      .required("Campo incompleto")
                      .max(10, "El número es muy largo")
                      .positive("El número debe ser positivo"),
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
                        <div className="container w-50">
                          <ErrorMessage
                            name="fecha"
                            render={(msg) => (
                              <div className="errormessage">{msg}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <label htmlFor="proveedor">Proveedor</label>
                        <Field name="proveedor" as="select">
                          {Proveedores &&
                            Proveedores.map((item, i) => {
                              return (
                                <option value={item.proveedor} key={item.id}>
                                  {item.proveedor}
                                </option>
                              );
                            })}
                        </Field>
                        <div className="container w-50">
                          <ErrorMessage
                            name="formapago"
                            render={(msg) => (
                              <div className="errormessage">{msg}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <label htmlFor="monto">Monto</label>
                        <Field name="monto" type="text" />
                        <div className="container w-50">
                          <ErrorMessage
                            name="monto"
                            render={(msg) => (
                              <div className="errormessage">{msg}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <label htmlFor="formapago">Forma de pago</label>
                        <Field name="formapago" as="select">
                          <option value="Contado">Contado</option>
                          <option value="Credito">Crédito</option>
                          <option value="Mercadopago">Mercado Pago</option>
                          <option value="Debito">Débito</option>
                        </Field>
                        <div className="container w-50">
                          <ErrorMessage
                            name="formapago"
                            render={(msg) => (
                              <div className="errormessage">{msg}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className="row my-2">
                        <label htmlFor="descripcion">Descripcion</label>
                        <Field name="descripcion" as="textarea" />
                        <div className="container w-50">
                          <ErrorMessage
                            name="descripcion"
                            render={(msg) => (
                              <div className="errormessage">{msg}</div>
                            )}
                          />
                        </div>
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
        </Modal>
      </>
    </div>
  );
};

export default Acciones;
