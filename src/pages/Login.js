import React, { useEffect, useState } from "react";
import { FormularioLogin } from "../components/FormularioLogin/FormularioLogin";
import { ModalRegistro } from "../components/modalRegistro/ModalRegistro";

import { Redirect } from "react-router-dom";

import { crearUsuario } from "../helpers/authFirebase";
import { loginUsuario } from "../helpers/authFirebase";
import { loginGoogle } from "../helpers/authFirebase";

export const Login = ({login, setLogin}) => {
  const [datosUsuario, setDatosUsuario] = useState({});
  const [datosRegistro, setDatosRegistro] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (Object.keys(datosUsuario).length > 0) {
      console.log("entra login");
      loginUsuario(datosUsuario).then((userCredential) => {
        setLogin({ ...Login, usuario: userCredential.user, loggin: true });
      });
    }
  }, [datosUsuario]);

  useEffect(() => {
    if (Object.keys(datosRegistro).length > 0) {
      console.log("entra registro");
      crearUsuario(datosRegistro);
    }
  }, [datosRegistro]);

  return (
    <>
      <ModalRegistro
        setDatosRegistro={setDatosRegistro}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {login.loggin ? (
        <Redirect to="/" />
      ) : (
        <FormularioLogin
          setDatosUsuario={setDatosUsuario}
          setShowModal={setShowModal}
          loginGoogle={loginGoogle}
          setLogin={setLogin}
          login={login}
        />
      )}
    </>
  );
};
