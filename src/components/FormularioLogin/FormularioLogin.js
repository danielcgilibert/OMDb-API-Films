import React, { useState } from "react";
import { firebase } from '../../firebase/config'

export const FormularioLogin = ({ setDatosUsuario, setShowModal, loginGoogle, setLogin, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputEmail = (e) => setEmail(e.target.value.trim());
  const handleInputPassword = (e) => setPassword(e.target.value.trim());

  const handleLoginGoogle = () => {
   const provider=  loginGoogle();
   firebase.auth().signInWithPopup(provider).then(result => setLogin({...login, usuario: result.additionalUserInfo, loggin: true}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      email,
      password,
    };

    setDatosUsuario(datos);
  };

  return (
    <div>
      <div className="relative  min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
        {" "}
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="mt-2  w-full items-center z-10">
          <form 
            onSubmit={handleSubmit}
            className=" w-full  bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10"
          >
            <h2 className="text-4xl font-bold text-center text-indigo-600">
              Login
            </h2>
            <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={handleInputEmail}
                placeholder="Email"
                className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={handleInputPassword}
                placeholder="password"
                className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="block mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></input>
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>
            <div className="flex items-center flex items-center  mt-4">
              <button
                type="submit"
                className="px-6 py-2 mr-2 ml-2  font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 "
              >
                Log in
              </button>
              <button
                onClick={handleLoginGoogle}
                type="button"
                className="px-5 py-2  mr-2 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-blue-700 rounded-full text-white bg-blue-600 "
              >
                Log in             <i class="pl-1 fab fa-google"></i>
  
              </button>

              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="px-6 py-2  font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-blue-700 rounded-full text-white bg-blue-600 "
              >
                Registro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
