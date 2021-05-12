import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div class=" col-sm-12 col-xs-12 col-md-12 col-lg-12 navbar-ppio navbar-static-top">
            <nav className="Navbar navbar-dark bg-dark navbar-ppio navbar-static-top">
             <div className="row col-12 container">
                    <a class="col-sm-12 col-xs-12 col-lg-6 navbar-brand offset-sm-3  offset-lg-4 offset-xxl-7" href="#">
                        <img src="Recursos/logo/LogoLogistica.png" alt="" width="320" height="98"/>
                    </a> 
                    <div class="col-sm-12 col-lg-12  col-xs-12 offset-sm-3  offset-lg-5 offset-xxl-7">
                   
                    <div className="col"  >
                         <a  href="*" ><img class="mx-3 img-rounded icono-redes boton-link-redes" width="60" height="50" src="Recursos/iconos/whatsapp_ico.png" />
                         </a>
                         <span class="h5 Contacto ">+54 (0221) 5791970
                         </span>
                        
                        </div>
                        <a  href="*" ><img class=" mx-3 img-rounded icono-redes boton-link-redes" width="60" height="50" src="Recursos/iconos/instagram.png" />
                        </a>
                        <span class="h5 Contacto">@LogisticaMenendez
                         </span>
                        
                    </div>
                    </div>  

            
            </nav>
        </div>
    )
}
