import React from "react";
import CardHeader from "./CardHeader";

import { useQuery } from '@apollo/react-hooks';
//import { gql } from 'apollo-boost';

import "./styles/card-list-header.scss"
import "./styles/header.scss"

import { ALL_STAY }  from '../graphql/query';

/*const ALL_STAY = gql`
{
    allStayDatas{
        id
        customId
        label
        bestPrice
      }      
}`;*/

const CardListHeader = (props) => {

    const { loading, error, data } = useQuery(ALL_STAY);

    return(        
        <>
        {(!loading && !error) &&
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
                                    onClickCard={() => props.onSelected(item)} 
                                    selectedButton={ item.customId === props.colorButton ? "buttonTrue" : "buttonFalse" } />
                            )
                        } 
                    </div>   
                </div>
            </div>
        }
        </>
    )
}

export default CardListHeader;