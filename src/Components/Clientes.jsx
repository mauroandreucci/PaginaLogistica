import React, { Fragment } from "react";
import "./Clientes.css";

export const Clientes = (props) => {
  return (
    <Fragment>

      <div class=" row contenedor-clientes ">
      
                <div class="row col-sm-6 col-lg-3 offset-sm-3 offset-lg-0 mt-5 mb-5  ">
                    <img class="foto-cliente " src={props.contenedorIMG1} />
                
                </div>
                
        
               
                <div class="row col-sm-6 col-lg-3 offset-sm-3 offset-lg-0 me-0 mt-5 mb-5 ">
                    <img class="foto-cliente " src={props.contenedorIMG2} />
                
                </div>
               
               
                <div class="row col-sm-6 col-lg-3 offset-sm-3 offset-lg-0 me-0 mt-5 mb-5 ">
                    <img class="foto-cliente " src={props.contenedorIMG3} />
                
                </div>
                <div class="row col-sm-6 col-lg-3 offset-sm-3 offset-lg-0 me-0 mt-5 mb-5 ">
                    <img class="foto-cliente " src={props.contenedorIMG4} />
                
                </div>
             
       
       
         </div>
      
    </Fragment>
  );
};
