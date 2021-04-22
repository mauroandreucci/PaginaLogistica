import React from 'react'
import './ContenedorPpl.css';

export const FormContacto = () => {
    return (
        <div class="col-lg-8 col-sm-12 col-xs-12 offset-lg-2 card mt-5 cartel-detalle">
            <form class="text-center">
            <div class="mb-3 col-sm-12 col-lg-6 offset-lg-3">
                <label for="exampleInputEmail1" class="form-label">Direccion de email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">En este Recibiras tu respuesta !</div>
            </div>
            <hr/>
            <div class="mb-3 col-sm-12 col-lg-10 offset-lg-1 ">
                <label   for="textoConsulta" class="form-label">Dejanos tu consulta </label>
                <textarea type="text" class="form-control" id="text1"/>
            </div>


            <div class="mb-3 col-sm-12 col-lg-6 offset-lg-3 form-check mt-5">
            <div id="emailHelp" class="form-text "><h6>Contanos como nos encontraste!</h6></div>
            <hr/>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Por recomendacion</label>
                
            </div>
            <div class="mb-3 col-sm-12 col-lg-6 offset-lg-3 form-check">
           
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Por Redes Sociales</label>
                
            </div>
            <div class="mb-3 col-sm-12 col-lg-6 offset-lg-3 form-check">
            
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Por Google</label>
                
            </div>
            <button type="submit" class="btn btn-primary mt-4">Enviar</button>
             </form>
                    
        </div>
        
    )
}
export default FormContacto;