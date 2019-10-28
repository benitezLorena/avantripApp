import React from "react";
import CardHeader from "./CardHeader";
import Title from "./Title";

import "./styles/card-list-header.scss"

const CardListHeader = () => {
    return(
        <>
            <Title />
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