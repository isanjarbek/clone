import React from 'react'
import './evolution.css'

function Evolution() {
    return (
        <div className="evolution container">
            <div className="row">
                <div className="wrapper">
                    <div className="evolution-image">
                        <img src="https://click.uz/click/images/evolution.svg" alt=""/>
                    </div>
                </div>
                <div className="wrapper direction">
                    <div className="evolution-text">
                        <h2>CLICK Evolution</h2>
                        <p>Smartfoningiz uchun maxsus va zamonaviy ilova. Yuklab oling va qulay interfeys orqali to'lashni va pul o'tkazishni boshlang. Ilovamizning eng oxirgi qulayliklaridan foydalanish uchun esa uni tez-tez yangilab turishni unutmang!</p>
                    </div>
                    <div className="evolution-download">
                        <h4>Hozir yuklab olish</h4>
                        <div className="evolution-list">
                            <a href="#">
                                <img src="https://click.uz/click/images/evo1.svg" alt=""/>
                            </a>
                            <a href="#">
                                <img src="https://click.uz/click/images/evo2.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evolution