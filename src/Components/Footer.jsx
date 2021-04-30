import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMugHot} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faMugHot} />
    
    return (
        <div>
            
            <div class="card-text card cartel-detalle card-body text-center text-muted">
                    <h4 class="cartel-detalle">Quienes confiaron en nosotros...</h4>
                    <i class="fab fa-angellist">sds</i>
                    {element}
                </div>


    
  
        </div>
    )
}

export default Footer
