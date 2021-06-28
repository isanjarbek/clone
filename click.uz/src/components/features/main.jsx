import React from 'react'
import './style.css'
import Paper from '../paper/index'

function Features() {
    return (
        <div className="mainFuture">
            <div className="container">
                <div className="main-fut-title">
                    <h2>Yangilangan xizmatlar</h2>
                    <p>CLICK Evolution ilovasi hayotingizning ko'proq sohalarini qamrab olish, masofaviy to'lovlarni amalga oshirishda yanada ko'proq imkoniyatlarni qo'shish va qo'llashda yana ham qulay bo'lish maqsadida har doim takomillashib boradi. Ilovani yangilab turishni unutmang, ehtimol ayni shu damda sizga qulaylik baxsh etish uchun yetishmayotgan tugma paydo bo'lgan bo'lsa ajabmas.</p>
                </div>
                <div className="row-animated">
                    <div className="row-paper">
                        <Paper image="https://click.uz/click/images/features/feat1.svg" matn="CLICK ga ulaning"
                            use="CLICK tizimiga ulaning va cheksiz funktsionaldan foydalaning" />
                        <Paper image="https://click.uz/click/images/features/feat2.svg" matn="USSD-xizmat"
                            use="USSD-so’rovlar yordamida to'lovlarni amalga oshiring, hatto telefoningiz balansi salbiy bo'lganida ham." />
                        <Paper image="https://click.uz/click/images/features/feat3.svg" matn="Hamkor bo'ling"
                            use="To’lovlarni o'z saytingizda onlayn tarzda yoki sotuv nuqtalarida CLICK PASS texnologiyasi orqali qabul qiling" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features