import React, { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
import Title from "./Title";

import "./styles/card-list-header.scss"

const CardListHeader = () => {

    const [typeState, setTypeState] = useState([]);

    useEffect(() => {
        let types = [            
            {id:100, description:'Todas las estadias', price:26.90}, 
            {id:200, description:'7 Dias', price:25},
            {id:300, description:'10 Dias', price:30}
        ]
        setTypeState(types);
    }, []);

    return(
        <>
            <div className="container">
                <Title />
                <div className="row no-gutter contentListHeader">
                    {
                        typeState.map((item) => 
                            <CardHeader key={item.id} description={item.description} price={item.price}  />
                        )
                    } 
                </div>    
            </div>
        </>
    )
}

export default CardListHeader;