import React, { Component } from 'react';
import CardList from "./CardList";
import SearchResponseTitle from "./SearchResponseTitle";
import Header from "./Header";


const App = () => {
    return (
        <div>
            <main>
                <Header />
                <SearchResponseTitle />
                <CardList />
            </main>
            
        </div>
    )
}

export default App;