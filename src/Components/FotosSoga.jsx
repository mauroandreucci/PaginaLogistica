import React from 'react'
import './ContenedorPpl.css';

export const FotosSoga = (props) => {
    return (
        <div class="row">
                      <div class="row col-xs-12 col-sm-12 col-lg-12 ms-lg-4 mb-5">    
                <div class=" col-sm-9 col-lg-4 offset-sm-2 offset-lg-0 me-0 mb-5 ">
                    <img class="Img-soga col-sm-10 col-lg-10 mt-4" src={props.contenedorIMG1} />
                
                </div>
                
                <div class="col-sm-9 col-lg-4 offset-sm-2  offset-lg-0 me-0 mb-5 ">
                <img class=" Img-soga col-sm-10 col-lg-10 mt-4 offset-lg-0" src={props.contenedorIMG2} />
                
                </div>
                <div class="col-sm-9 col-lg-4 offset-sm-2  offset-lg-0 me-0 mb-0  ">
                <img class=" Img-soga col-sm-10 col-lg-10 mt-4 offset-lg-0" src={props.contenedorIMG3} />
                
                </div>
            </div>
           

            <div class="card-text card  cartel-detalle card-body text-center text-muted mt-0">
        <p>
          <h4>Trabajos en altura con soga</h4>
        </p>
        
      </div>
      <hr/>
                <div class="card-text card cartel-detalle card-body text-center text-muted">
                    <h4 class="cartel-detalle">Quienes confiaron en nosotros...</h4>
                </div>

        </div>
            
        
    )
}
export default FotosSoga