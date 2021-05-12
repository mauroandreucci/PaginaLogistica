import React from "react";
import "./ContenedorPpl.css";

export const FormContacto = () => {
  return ( 
    <div class="col-lg-8 col-sm-12 col-xs-12 offset-lg-2 card mt-5  cartel-detalle mb-5">
      <form class="text-center">
        <div class="mb-3 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 mb-5">
          <label for="exampleInputEmail1" class="form-label">
            <h4>Direccion de email</h4>
          </label>
          <div>
            <img
              class="mx-4 mb-4"
              id="IconoForm"
              src="/Recursos/iconosVect/email.png"
              width="45px"
            ></img>
          </div>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            En este Recibiras tu respuesta !
          </div>
        </div>

        <div class="mb-3 col-sm-10 offset-sm-1 col-lg-10 offset-lg-1 ">
          <label for="textoConsulta" class="form-label">
            <h4>Dejanos tu consulta</h4>{" "}
          </label>
          <div>
            <img
              class="mx-4 mb-4"
              id="IconoForm"
              src="/Recursos/iconosVect/question.png"
              width="45px"
            ></img>
          </div>
          <textarea type="text" class="form-control" id="text1" />
        </div>

        <div class=" col-sm-12 col-lg-6 offset-lg-3 form-check mt-5">
          <div id="emailHelp" class="form-text">
            <h4>Contanos como nos encontraste ?</h4>
          </div>
          <label class="form-check-label" for="exampleCheck1">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <h5>Por recomendacion</h5>
          </label>{" "}
          <img
            class="mx-1 mt-4 mb-4"
            id="IconoForm"
            src="/Recursos/iconosVect/chat.png"
            width="45px"
          ></img>
        </div>
        <div class="mb-3 col-sm-12 col-lg-6 offset-lg-3 form-check">
          <label class="form-check-label" for="exampleCheck1">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <h5>Por redes sociales</h5>
          </label>{" "}
          <img
            class="mx-1 mb-4"
            id="IconoForm"
            src="/Recursos/iconosVect/red.png"
            width="45px"
          ></img>
        </div>
        <div class="mb-4 col-sm-12 col-lg-6 offset-lg-3 form-check">
          <label class="form-check-label" for="exampleCheck1">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <h5>Por Google</h5>
          </label>
          <img
            class="mx-4 mb-2"
            id="IconoForm"
            src="/Recursos/iconosVect/google-symbol.png"
            width="35px"
          ></img>
        </div>
        <button type="submit" class="btn btn-primary mt-4 mb-4">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default FormContacto;
