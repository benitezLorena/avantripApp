import React, { Component } from 'react';
import CardList from "./CardList";
import SearchResponseTitle from "./SearchResponseTitle";
import CardListHeader from "./CardListHeader";
import Header from "./Header";

const App = () => {
    return (
        <div>
            <main className="container">
                <Header />
                <SearchResponseTitle />
                <CardList />
            </main>
            
        </div>
    )
}

export default App;