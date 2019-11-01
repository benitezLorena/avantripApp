import React from 'react';
import "./styles/search-result-title.scss"

const SearchResultTitle = (props) => {
     return(
         <div className="search-result-title">
            <h2>Vuelos destacados en <span>{props.title}</span></h2>
         </div>
     )
}

export default SearchResultTitle;