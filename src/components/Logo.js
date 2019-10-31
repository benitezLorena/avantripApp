import React from 'react';
import logo from '../images/logo-avantrip.png';
import "./styles/logo.scss"

const Logo = () => {
     return(
         <div className="container contentLogo">
             <figure>
                <img src={logo} />
             </figure>
            <span>Viajar es la guita mejor invertida</span>
         </div>
     )
}

export default Logo;