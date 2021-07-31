import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Input = () => {
  const [cargaCategoriaExitosa, setCargaCategoriaExitosa] = useState(false);
  const [categoriaExiste, setCategoriaExiste] = useState(false);
  //Referencia a la base de datos
  const Ref = firestore.collection(
    `usuario/${auth.currentUser.uid}/categorias`
  );
  let [Categorias] = useCollectionData(Ref, { idField: "id" });
  //función para enviar a base de datos
  const enviarCategoria = (values) => {
    let fil = Categorias.filter((item) => {
      return values.categoria === item.categoria;
    });
    if (fil.length === 0) {
      Ref.add({
        categoria: values.categoria,
      });
      setCargaCategoriaExitosa(true);
      setTimeout(() => {
        setCargaCategoriaExitosa(false);
      }, 3000);
    } else {
      setCategoriaExiste(true);
      setTimeout(() => {
        setCategoriaExiste(false);
      }, 3000);
    }
  };
  return (
    <div>
      <Formik
        /*Valores iniciales del formulario*/
        initialValues={{
          categoria: "",
        }}
        /*Esquema de validaciones*/
        validationSchema={Yup.object({
          categoria: Yup.string().required("Campo incompleto"),
        })}
        /*Funcion que se ejecuta cuando se envía el formulario*/
        onSubmit={(values, { resetForm }) => {
          enviarCategoria(values);
          resetForm({ values: "" });
        }}
      >
        <Form>
          <div className="container my-4 text-center">
            <h3 className="my-2">Nueva categoría</h3>
            <div className="row my-2">
              <label htmlFor="categoria">Ingresá una nueva categoría</label>
              <Field name="categoria" type="text" />
              <ErrorMessage name="categoria" />
            </div>
            <div className="row my-4">
              <button className="btn btn-success" type="submit">
                Cargar
              </button>
            </div>
            <div className="container">
              {cargaCategoriaExitosa ? (
                <div
                  class="alert alert-info d-flex align-items-center p-2 my-1"
                  role="alert"
                >
                  <i class="bi bi-check-circle mx-1"></i>
                  <div>Categoría cargada exitosamente</div>
                </div>
              ) : null}
              {categoriaExiste ? (
                <div
                  class="alert alert-danger d-flex align-items-center p-2 my-1"
                  role="alert"
                >
                  <i class="bi bi-x-circle mx-1"></i>
                  <div>La categoría ya existe</div>
                </div>
              ) : null}
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Input;