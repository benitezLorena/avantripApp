import React, { Component } from 'react';
import CardList from "./CardList";
import Header from "./Header";
import Logo from "./Logo";

const App = () => {

    return (
        <div>
            <main>
                <Logo />
                <Header />
                <CardList  />
            </main>
            
        </div>
    )
}

export default App;