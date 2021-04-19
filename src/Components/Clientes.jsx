import React from 'react'
import './Clientes.css';

export const Clientes = (props) => {
    
    
    
    return (
        <div class="row mt-4 card">
        <div class="row mt-4 col-xs-12 col-sm-12 col-lg-12 ms-lg-2 mb-5">    
  <div class=" col-sm-6 col-lg-2 offset-sm-2 offset-lg-2 me-0  ">
      <img class="foto-cliente col-sm-10 col-lg-10 mt-4" src={props.contenedorIMG1} />
  
  </div>
  
  <div class="col-sm-12 col-lg-2  offset-sm-2 offset-lg-0 ">
  <img class=" foto-cliente col-sm-10 col-lg-10 mt-4 offset-sm-2 offset-lg-0" src={props.contenedorIMG2} />
  
  </div>
  <div class="col-sm-12 col-lg-2  offset-sm-2 offset-lg-0 ">
  <img class=" foto-cliente col-sm-10 col-lg-10 mt-4 offset-sm-2 offset-lg-0" src={props.contenedorIMG3} />
  
  </div>
  <div class="col-sm-12 col-lg-2  offset-sm-2 offset-lg-0 ">
  <img class=" foto-cliente col-sm-10 col-lg-10 mt-4 offset-sm-2 offset-lg-0" src={props.contenedorIMG4} />
  
  </div>
  
</div>
<hr/>
  <div class="card-text card  cartel-detalle card-body text-center text-muted">
      <h4>Quienes confiaron en nosotros... </h4>
  </div>

</div>
    )
}
