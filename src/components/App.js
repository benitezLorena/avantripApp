import React, { Component } from 'react';
import CardList from "./CardList";
import Header from "./Header";


const App = () => {

    return (
        <div>
            <main>
                <Header />
                <CardList  />
            </main>
            
        </div>
    )
}

export default App;