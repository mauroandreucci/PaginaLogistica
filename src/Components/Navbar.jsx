import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div class=" col-sm-12 col-xs-12 col-md-12 col-lg-12 navbar-ppio navbar-static-top">
            <nav class="navbar navbar-light bg-light navbar-ppio navbar-static-top">
            
                    <a class="mr-lg-2 col-sm-12 col-xs-12 col-lg-6 navbar-brand offset-sm-3  offset-lg-0 offset-xxl-0" href="#">
                        <img src="Recursos/logo/LogoLogistica.png" alt="" width="320" height="98"/>
                    </a> 
                    <div class="col-sm-12 col-lg-3 col-xs-12 offset-sm-3  offset-lg-0 offset-xxl-0">
                   
                    <div class="col"  >
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
                    

            
            </nav>
        </div>
    )
}
