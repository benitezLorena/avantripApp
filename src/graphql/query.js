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

export { 
  ALL_STAY, 
  CARDS_BY_STAY
}
