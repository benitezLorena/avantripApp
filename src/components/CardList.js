
import Card from "./Card";
import React, { useEffect, useState } from "react";
import {trips} from "../trips.json"
console.log(trips)

const CardList = () => {
    /*const [trips, setTrips] = useState([]);

    useEffect(() => {
        let data = trips
        setTrips(trips);
    }, []);*/


    return(
        <>
            <div className="container cardList">
                <div className="row no-gutters">
                <Card   />
                   
                </div>
            </div>
        </>
    )
   
}

export default CardList;