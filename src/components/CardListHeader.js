import React from "react";
import CardHeader from "./CardHeader";

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import "./styles/card-list-header.scss"
import "./styles/header.scss"

const ALL_STAY = gql`
{
    allStayDatas{
        id
        customId
        label
        bestPrice
      }      
}`;

const CardListHeader = (props) => {

    const { loading, error, data } = useQuery(ALL_STAY);

    if (loading) return null;
    if (error) return null;

    return(        
        <>
            <div className="header">
                <div className="container">
                    <h1 className='title'>Los vuelos mas baratos para tu estadia en <span>Miami</span></h1>
                    <div className="row no-gutter contentListHeader">
                        {                 
                            data.allStayDatas
                            .sort((a, b) => a.customId - b.customId)
                            .map(( item) => 
                                <CardHeader key={item.id} 
                                    description={item.label} 
                                    price={item.bestPrice}
                                    onClickCard={() => props.onSelected(item)} />
                            )
                        } 
                    </div>   
                </div>
            </div>
        </>
    )
}

export default CardListHeader;