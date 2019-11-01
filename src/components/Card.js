import React from 'react';
import './styles/card.scss';

const Card = (props) => {    

    const card = props.item

    return(
        <div className="col-sm-12 col-lg-4">
            <div className="contentCard">
                <div className="contentActionCard">
                    <figure>
                        <img src={card.imgUrl} alt="img" />
                    </figure>
                    <div className="contentArticles">
                        <article>
                            <div>
                                <i className="icon"></i>
                                <span>{card.scale}</span>
                            </div>
                            <p>{card.description}</p>
                        </article>
                        <article className="contentPrice">
                            <span>Precios desde</span>
                            <p>${card.price}</p>
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