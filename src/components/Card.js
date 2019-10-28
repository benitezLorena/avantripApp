import React from 'react';
import './styles/card.scss';

const Card = () => {
    return(
        <div className="contentCard">
            <a className="contentActionCard">
                <figure>
                        <img src="https://via.placeholder.com/150" alt="img" />
                </figure>
                <div className="contentArticles">
                    <article>
                        <div>
                            <i className="glyphicon glyphicon-plane">icon</i>
                            <span>Directo</span>
                        </div>
                        <p>7 dias en la playa</p>
                    </article>
                    <article className="contentPrice">
                        <span>Precios desde</span>
                        <p>$26.000</p>
                    </article>
                </div>
                <div className="actionLink">
                    <a href="https://www.avantrip.com/">Ver vuelo</a>
                </div>
            </a>
        </div>
    )
}

export default Card;