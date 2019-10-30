import React from "react";

import "./styles/card-header.scss";

const CardHeader = (props) => {

    return(
        <>
            <div className="col-sm-2">
                <button className="contentCardHeader">
                    <p>{props.description}</p>
                    <a href="" className="offerPriceSince">desde {props.price}</a>
                </button>
            </div>
        </>
    )
}

export default CardHeader;