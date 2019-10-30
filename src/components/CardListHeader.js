import React, { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
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

    const { loading, error, data } = useQuery(ALL_STAY);

    if (loading) return null;
    if (error) return null;

    return(        
        <>
            <div className="row no-gutter contentListHeader">
                {                 
                    data.allStayDatas.map((item) => 
                        <CardHeader key={item.id} description={item.label} price={item.bestPrice}  />
                    )
                } 
            </div>   
        </>
    )
}

export default CardListHeader;