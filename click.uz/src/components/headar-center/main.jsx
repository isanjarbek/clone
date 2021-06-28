import React from 'react'
import './style.css'
import Button from '../button/main'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'

function HeaderCenter() {
    return (
        <div className="container">
            <div className="header-center">
                <div className="row">

                    <div className="wrapper">
                        <div className="mackup">
                            <img src="https://click.uz/click/images/mainWallet.svg" alt="" />
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="main-wallet-text">
                            <h2 className="paragrf">CLICK-hamyon</h2>
                            <p>Yangi imkoniyatlarni ishlating</p>
                            <div className="main-wallet-features">
                                <div className="main-features-item">
                                    <div className="main-features-item-icon">
                                        <img src="https://click.uz/click/images/home/wallet1.svg" alt="" />
                                    </div>
                                    <div className="main-features-item-text">
                                        <p>Pul <span>o'tqazing</span></p>
                                    </div>
                                </div>
                                <div className="main-features-item">
                                    <div className="main-features-item-icon">
                                        <img src="https://click.uz/click/images/home/wallet2.svg" alt="" />
                                    </div>
                                    <div className="main-features-item-text">
                                        <p>Xarid va xizmatlarga <span> to'lang</span></p>
                                    </div>
                                </div>
                                <div className="main-features-item">
                                    <div className="main-features-item-icon">
                                        <img src="https://click.uz/click/images/home/wallet3.svg" alt="" />
                                    </div>
                                    <div className="main-features-item-text">
                                        <p>CASHBACK <span>oling</span></p>
                                    </div>
                                </div>
                            </div>
                            <Button/>
                            
                        </div>
                    </div>


                </div>
            </div>

            <div className="header-bottom">
                <div className="row">
                    <div className="col-bottom">
                        <div className="header-bottom-apps">
                            <a href="#">
                                <img src="https://click.uz/click/images/icon/google-play.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://click.uz/click/images/icon/app-Store.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-bottom"></div>
                    <div className="col-bottom">
                        <div className="header-bottom-social">
                            <ul>    
                                <li>
                                    <a href="#"><FacebookIcon/><span>Facebook</span></a>
                                </li>
                                <li>
                                    <a href="#"><InstagramIcon/><span>Instagram</span></a>
                                </li>
                                <li><a href="#"><TelegramIcon/><span>Telegram</span></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default HeaderCenter