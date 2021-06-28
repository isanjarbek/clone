import React from 'react'
import './section.css'


function Section() {
    return (
        <div className="Mainwallet container">
            <div className="row">
                <div className="wrapper">
                    <div className="section-text">
                        <h3 className="paragrf">CLICK kartasiga ega bo'ling</h3>
                        <a href="#">2%gacha CASHBACK oling</a>
                        <div className="textlinks">
                            <a href="#" class="dashed">Buyurtma berish</a>
                        </div>

                        <div className="text-cards">
                            <div className="text-card-item">
                                <img src="https://click.uz/click/images/header/uzcard.svg" alt=""/>
                            </div>
                            <div className="text-card-item">
                                <img src="https://click.uz/click/images/header/humo.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="cards-image">
                        <img src="https://click.uz/click/images/header/cards.svg" className="pic"alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section