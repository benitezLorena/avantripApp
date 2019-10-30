import React from "react";
import CardListHeader from "./CardListHeader";

import "./styles/header.scss"


const Header = () => {

    return(
        <div className="header">

            <div className="container">
                <h1 className='title'>Los vuelos mas baratos para tu estadia en <span>Miami</span></h1>
                <CardListHeader />
            </div>
            
        </div>
    )
}

export default Header;