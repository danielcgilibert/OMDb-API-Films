import React from "react";

export const BotonCargarMas = ({ page, setPage }) => {
  return (
    <div className="col-span-3 flex justify-center ">
      <button
        className="mx-auto w-1/2 mb-12 px-5 py-3 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
        onClick={() => setPage(page + 1)}
      >
        <i className="fas fa-angle-double-down"></i>
      </button>
    </div>
  );
};
