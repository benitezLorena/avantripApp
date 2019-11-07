
import Card from "./Card";
import React from "react";

import "./styles/card-list.scss";


const CardList = (props) => {

    const cards = props.items; 

    return(
        <>
            <div className="cardList">
                <div className="container">
                    
                    <div className="row no-gutters">
                        {                                                    
                            cards.map((row) => <Card key={row.id} item={row} /> )
                        }
                     </div>
                </div>
            </div>
        </>
    )
   
}

export default CardList;