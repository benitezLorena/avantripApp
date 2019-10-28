import React, { Component } from 'react';
import CardList from "./CardList";
import SearchResponseTitle from "./SearchResponseTitle";
import CardListHeader from "./CardListHeader";

const App = () => {
    return (
        <div>
            <main className="container">
                <CardListHeader />
                <SearchResponseTitle />
                <CardList />
            </main>
            
        </div>
    )
}

export default App;