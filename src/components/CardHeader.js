import React from "react";

import "./styles/card-header.scss";

const CardHeader = (props) => {

    return(
        <>
            <div className="col-sm-2">
                <button className="contentCardHeader" onClick={props.onClickCard} >
                    <p>{props.description}</p>
                    <span className="offerPriceSince">desde ${props.price}</span>
                </button>
            </div>
        </>
    )
}

export default CardHeader;