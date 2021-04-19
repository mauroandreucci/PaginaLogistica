import React from 'react'
import './ContenedorPpl.css';
import { FlayerProd } from './FlayerProd';
import FormContacto from './FormContacto';
import FotosSoga from './FotosSoga';

export const ContenedorPpl = (props) => {
    return (
        <div class="contenedor-principal container">
                <FlayerProd> </FlayerProd>
                <FotosSoga contenedorIMG1={"/Recursos/imagenes/soga-2.jpeg"} contenedorIMG2={"/Recursos/imagenes/soga-1.jpeg"} contenedorIMG3={"/Recursos/imagenes/soga-3.jpeg"}></FotosSoga>
                <FormContacto></FormContacto>
      </div>
    )
}
export default ContenedorPpl
