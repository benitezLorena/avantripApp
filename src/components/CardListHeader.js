import React, { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
import Title from "./Title";
import "./styles/card-list-header.scss"

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_STAY = gql`
{
    allStayDatas{
        id
        customId
        label
        bestPrice
      }      
}`;

const CardListHeader = () => {

    //const [typeState, setTypeState] = useState([]);
    const { loading, error, data } = useQuery(ALL_STAY);

    useEffect(() => {
        
        /*let types = [            
            {id:100, description:'Todas las estadias', price:26.90}, 
            {id:200, description:'7 Dias', price:25},
            {id:300, description:'10 Dias', price:30}
        ]

        setTypeState(types); */
    
    }, []);

    if (loading) return null;
    if (error) return null;

    return(        
        <>

            <div className="container">
                <Title />
                <div className="row no-gutter contentListHeader">
                    {
                        /*typeState.map((item) => 
                            <CardHeader key={item.id} description={item.description} price={item.price}  />
                        )*/
                                            
                        data.allStayDatas.map((item) => 
                            <CardHeader key={item.id} description={item.label} price={item.bestPrice}  />
                        )
                    } 
                </div>    
            </div>
        </>
    )
}

export default CardListHeader;