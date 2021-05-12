import React from 'react'

import './ContenedorPpl.css';
import { FlayerProd } from './FlayerProd';
import FormContacto from './FormContacto';
import FotosSoga from './FotosSoga';
import { Clientes } from './Clientes';


export const ContenedorPpl = (props) => {
    return (
        <div class="contenedor-principal container">
                <FlayerProd> </FlayerProd>
                <FotosSoga contenedorIMG1={"/Recursos/imagenes/soga-2.jpeg"} contenedorIMG2={"/Recursos/imagenes/soga-1.jpeg"} contenedorIMG3={"/Recursos/imagenes/soga-3.jpeg"}></FotosSoga>
                <Clientes contenedorIMG1={"/Recursos/clientes/Aloise-B.jpg"} contenedorIMG2={"/Recursos/clientes/amffa.png"} contenedorIMG3={"/Recursos/clientes/center.jpg"} contenedorIMG4={"/Recursos/clientes/estudiantes.png"}  ></Clientes>

                <FormContacto></FormContacto>
                
      </div>
    )
}
export default ContenedorPpl
