import React from "react";
import CardHeader from "./CardHeader";

import "./styles/card-list-header.scss"

const CardListHeader = () => {
    return(
        <>
            <div className="row no-gutter contentListHeader">
                <div col-sm-2><CardHeader /></div>
                <div col-sm-2><CardHeader /></div>
                <div col-sm-2><CardHeader /></div>
                <div col-sm-2><CardHeader /></div>
                <div col-sm-2><CardHeader /></div>
                <div col-sm-2><CardHeader /></div>
            </div>
        </>
    )
}

export default CardListHeader;