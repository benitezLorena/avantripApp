import React from "react";

import "./styles/card-header.scss";

const CardHeader = (props) => {

    return(
        <>
            <div className="col-sm-2">
                <article className="contentCardHeader">
                    <p>{props.description}</p>
                    <a href="" className="offerPriceSince">desde {props.price}</a>
                </article>
            </div>
        </>
    )
}

export default CardHeader;