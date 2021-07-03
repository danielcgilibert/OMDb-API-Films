import React from 'react'
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";



export const Cargando = () => {
    
    let [color, setColor] = useState("#FFFFFF");
  
    return (
        <div className="sweet-loading flex justify-center pt-24">
        <HashLoader color={color}   size={100} />
      </div>
  

    )
}
