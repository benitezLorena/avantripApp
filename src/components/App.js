import React, { useState } from 'react';
import Logo from './Logo';
import CardListHeader from './CardListHeader';
import SearchResultTitle from './SearchResultTitle';
import CardList from "./CardList";

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const CARDS_BY_STAY = gql`
    query Card($currentStay: String) {
        allCards(filter: { stayId: $currentStay} ){
            id
            stayId
            description
            imgUrl
            link
            scale  
            price  
        }
  }`;

const App = () => {

    const [currentStay, setCurrentStay] = useState()
    const [titleStay, setTitleStay] = useState("todas las estadias")

    const {loading, error, data} = useQuery(CARDS_BY_STAY, { variables: { currentStay }});

    const onCardListSelected = (item) => {              
        item.customId != "0" ?  setCurrentStay(item.customId) : setCurrentStay()
        changeTitleStay(item)
    }
    
    const changeTitleStay = (item) =>{
        setTitleStay(item.label)
    }

    if (loading || error) return null;

    return (
        <>
            <main>
                <Logo />
                <CardListHeader onSelected={onCardListSelected} />
                <SearchResultTitle title={titleStay} />
                <CardList items={data.allCards}  />
            </main>            
        </>
    )
}

export default App;