import React from 'react'
import { Close, Call, Public, Menu, PhoneIphone, MeetingRoom } from '@material-ui/icons';
import './navbar.css'
import { IconButton } from '@material-ui/core';

function Navbar({ open, setOpen }) {

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="header-fixed">
            <div className="header-top">
                <div className="container">
                    <div className="header-row line">
                        <div className="header-col-left">
                            <div className="header-logo">
                                <a href="#">
                                    <img src="https://anorbank.uz/images/logo.svg" alt="" />
                                </a>
                            </div>
                            <div className="header-menu">
                                <nav>
                                    <li>
                                        <a href="#">Частным клиентам</a>
                                    </li>
                                    <li>
                                        <a href="#">Бизнесу</a>
                                    </li>
                                    <li>
                                        <a href="#">О банке</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                        <div className="header-col-right">
                            <div className="header-links">
                                <ul>
                                    <li><a href="#">Курс валют</a></li>
                                    <li><a href="#">Банкоматы</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#" Style="display:flex ; align-items:center"><span className="distance"><Call fontSize="16px" /> </span> +998 55 503-00-00</a></li>
                                </ul>
                            </div>
                            <div className="header-lang">
                                <ol>
                                    <li><a href="#" className="header-lang-items">
                                        <span className="distance"><Public /></span>Русский</a>
                                        <ol className="header-lang-none">
                                            <li><a href="#">O'zbekcha</a></li>
                                            <li><a href="#">English</a></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            <div className="header-mobile"  >
                                {
                                    open
                                        ? <IconButton size="small" onClick={handleClose}>
                                            <Close />
                                        </IconButton>
                                        : <IconButton size="small" onClick={handleOpen} >
                                            <Menu />
                                        </IconButton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-row">
                        <div className="header-col-left">
                            <div className="header-search"><Menu /> </div>
                            <div className="header-menu">
                                <nav>
                                    <li>
                                        <a href="#">Карты</a>
                                    </li>
                                    <li>
                                        <a href="#">Вклады</a>
                                    </li>
                                    <li>
                                        <a href="#">Кредиты</a>
                                    </li>
                                    <li>
                                        <a href="#" className="none">Другие услуги</a>
                                        <span className="soon">Скоро</span>
                                    </li>
                                    <li>
                                        <a href="#">Тарифы</a>
                                    </li>
                                </nav>
                            </div>
                        </div>

                        <div className="header-col-right">
                            <div className="header-links">
                                <ul>
                                    <li>
                                        <a href="#" className="center"><span><PhoneIphone /></span>Мобильное приложение</a>
                                    </li>
                                    <li>
                                        <a href="#" className="center"><span><MeetingRoom /></span>Вход</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar