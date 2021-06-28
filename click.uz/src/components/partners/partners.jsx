import React from 'react'
import './partners.css'
import Items from './item/items'
import Button from '../button/main'

function Partners() {
    return (
        <div className="partners">
            <div className="container">
                <div className="row">
                    <div className="wrapper">
                        <div className="maintext">
                            <h2 className="paragrf">Eng yirik to'lov tashkilotining</h2>
                            <p>hamkoriga aylaning</p>
                            <div className="feauture-item">
                                <Items pic="https://click.uz/click/images/home/partner2.svg" text="5 500 000"
                                    small="faol" bottext=" foydalanuvchilar" />
                                <Items pic="https://click.uz/click/images/home/partner3.svg" text="Doimiy"
                                    small="marketing" bottext="qo'llab-quvvatlash" />

                            </div>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners