import React from 'react'
import './style.css'

function HeaderTop() {
    return (
        <div className="main-header">
            <div className="container">
                <div className="main-header-top">
                    <a href="#" className="main-header-brand">
                        <img src="https://click.uz/click/images/logo.svg" alt="CLICK Evolution" />
                    </a>
                    <div className="main-header-list">
                        <ul>
                            <li className="main-header-item"><a href="#">Biz haqimizda</a></li>
                            <li className="main-header-item"><a href="#">Xizmatlar</a></li>
                            <li className="main-header-item"><a href="#">Bo'sh ish o'rinlari</a></li>
                            <li className="main-header-item"><a href="#">Hamkorlarga</a></li>
                        </ul>
                    </div>
                    <div className="cashbackdropdown">
                        <button> Cashback <i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div className="main-header-tab">
                        <a href="#">Shaxsiy kabinet</a>
                    </div>
                    <div className="main-header-lang">
                        <ul>
                            <li><a href="#">UZ</a></li>
                            <li><a href="#">РУ</a></li>
                            <li><a href="#">EN</a></li>
                        </ul>
                    </div>
                    <div className="main-header-search">
                        <form action="" method="get">
                            <input type="hidden"/>
                            <div className="search-top">
                                <input type="text" name="search"id="searchtop"/>
                                <div className="searchtopbutton">

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="main-top-burger">
                        <a href="#">
                            <img src="https://click.uz/click/images/menu.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HeaderTop