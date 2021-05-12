import React from "react";
import "./ContenedorPpl.css";
import Carousel from "react-bootstrap/Carousel";

export const FotosSoga = (props) => {
  return (
    <div >
      <div className="row col-sm-12 col-lg-8 offset-lg-2 mt-4">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 Img-soga"
              src={props.contenedorIMG1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 Img-soga" 
              src={props.contenedorIMG2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 Img-soga"
              src={props.contenedorIMG3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>
               
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 Img-soga" 
              src={props.contenedorIMG3}
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
  );
};
export default FotosSoga;
