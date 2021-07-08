import React from "react";
import { useForm } from "react-hook-form";

export const ModalRegistro = ({ showModal, setShowModal, setDatosRegistro }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    setDatosRegistro(data)
    e.target.reset();
    setShowModal(false);

  };

  return (
    <>
      {showModal ? (
        <>
          <div className="animate__animated animate__bounceIn justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-4xl font-bold text-center text-indigo-600">
                    Registro
                  </h2>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative w-full p-12 flex-auto">
                  {Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="animate__animated animate__bounceIn"
                    >
                      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">
                        Error en la validación
                      </div>
                      <div class=" border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        {errors.emailRegistro && (
                          <p className="pb-1">El email es requerido</p>
                        )}{" "}
                        {errors.passwordRegistro && (
                          <p>
                            La contraseña es necesaria{" "}
                            <ul>
                              {" "}
                              <li> - Mínimo 5 Caracteres </li>{" "}
                              <li> - Máximo 20 Caracteres </li>{" "}
                            </ul>{" "}
                          </p>
                        )}{" "}
                      </div>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:w-screen mx-12	   max-w-sm mx-auto rounded-xl  overflow-hidden lg:p-6 space-y-10"
                  >
                    <div className="f-outline  px-2 relative border rounded-lg focus-within:border-indigo-500">
                      <input
                        type="email"
                        name="emailRegistro"
                        placeholder="Email"
                        className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        {...register("emailRegistro", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
                      <input
                        type="password"
                        name="passwordRegistro"
                        placeholder="password"
                        className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        {...register("passwordRegistro", {
                          required: true,
                          minLength: 5,
                          maxLength: 20,
                        })}
                      />
                    </div>
                    <button className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm w-full py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      register
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
