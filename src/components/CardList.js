import React from "react";
import Card from "./Card";

const CardList = () => {
    return(
        <>
            <div className="row no-gutters">
                <div className="col-sm-12 col-lg-3"><Card /></div>
                <div className="col-sm-12 col-lg-3"><Card /></div>
                <div className="col-sm-12 col-lg-3"><Card /></div>
                <div className="col-sm-12 col-lg-3"><Card /></div>
            </div>
        </>
    )
   
}

export default CardList;