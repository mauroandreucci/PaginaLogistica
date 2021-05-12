import React, { Fragment } from "react";
import "./Clientes.css";
import Carousel from "react-bootstrap/Carousel";

export const Clientes = (props) => {
  return (
    <Fragment>

      <div class=" row col-lg-8 offset-lg-2  contenedor-clientes ">

      <div class="card-text card cartel-detalle card-body text-center text-muted">
        <h4 class="cartel-detalle">Quienes confiaron en nosotros...</h4>
      </div>

      
                <div class="row contenedor-Cliente col-sm-6 col-lg-6 offset-sm-3 offset-lg-3 mt-5 mb-5  ">
                <div className=" col-sm-12 col-lg-10 offset-lg-1 mt-4">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 foto-cliente"
              src={props.contenedorIMG1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
            <h3  class="text-center ">Aloise & cia</h3>
          </Carousel.Item >
          
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 foto-cliente" 
              src={props.contenedorIMG2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 foto-cliente"
              src={props.contenedorIMG3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>
              
              </p>
            </Carousel.Caption>
            <h3 class="text-center ">
              Center Hogar
              </h3>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 foto-cliente" 
              src={props.contenedorIMG4}
              alt="Four slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
                
                </div>
          
       
       
         </div>
      
    </Fragment>
  );


};

export default Clientes;
