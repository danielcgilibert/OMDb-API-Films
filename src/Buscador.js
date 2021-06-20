import React, { useState } from "react";

export const Buscador = ({ setBusqueda }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = e => setInputValue(e.target.value);

  const handleSubmit = e => {
      e.preventDefault();
      setBusqueda(inputValue);
  }

  return (
<div class="relative text-gray-600  ">
  <form className="w-full flex justify-center" onSubmit={ handleSubmit } >
  <input type="text" value={inputValue} onChange={handleInputChange} className="bg-white h-10 px-5 pr-10 w-10/12 h-12 rounded-full text-sm focus:outline-none" />  
  </form>
</div>
  );
};
