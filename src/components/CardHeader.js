import React from "react";

import "./styles/card-header.scss";

const CardHeader = (props) => {

    const onClickCard = () => {     
        console.log(props.description);
    }

    return(
        <>
            <div className="col-sm-2">
                <button className="contentCardHeader" onClick={onClickCard} >
                    <p>{props.description}</p>
                    <span className="offerPriceSince">desde {props.price}</span>
                </button>
            </div>
        </>
    )
}

export default CardHeader;