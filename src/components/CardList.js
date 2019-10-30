
import Card from "./Card";
import React, { useEffect, useState } from "react";

import "./styles/card-list.scss";

const CardList = (props) => {
    
    return(
        <>
            <div className="cardList">
                <div className="container">
                    <h2>Vuelos destacados en <span>todas las estadias</span></h2>
                    <div className="row no-gutters">
                        <Card />
                     </div>
                </div>
            </div>
        </>
    )
   
}

export default CardList;