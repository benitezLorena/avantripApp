import React from 'react';
import './styles/card.scss';

const Card = (props) => {
    return(
        <div className="col-sm-12 col-lg-3">
            <div className="contentCard">
            <div className="contentActionCard">
                <figure>
                        <img src="https://via.placeholder.com/150" alt="img" />
                </figure>
                <div className="contentArticles">
                    <article>
                        <div>
                            <i className="icon"></i>
                            <span>Directo</span>
                        </div>
                        <p>7 dias playa</p>
                    </article>
                    <article className="contentPrice">
                        <span>Precios desde</span>
                        <p>$26.000</p>
                    </article>
                </div>
                <div className="actionLink">
                    <a href="">Ver vuelo</a>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Card;