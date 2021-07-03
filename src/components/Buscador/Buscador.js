import React, { useState } from "react";

export const Buscador = ({ setBusqueda }) => {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = e => setInputValue(e.target.value);
  
  const handleSubmit = e => {
      e.preventDefault();
      setBusqueda(inputValue);
  }

  return (
<div className="relative text-gray-600 p-5 flex justify-center">
  <form className="w-8/12 flex justify-center" onSubmit={ handleSubmit } >
  <input type="text" placeholder="Find your movie " value={inputValue} onChange={handleInputChange} className="bg-white  px-5 pr-10 w-10/12 h-20 text-5xl	text-center	 rounded-full text-sm focus:outline-none focus:ring focus:border-blue-300" />  
  </form>
</div>
  );
};
