import React from 'react'
import './category.css'
import Slider from './swiper'


const Category = () => {

    return (
        <div className="mainCategory">
            <div className="container">
                <div className="category-title">
                    <h2>Ro'yxatdan o'tmasdan to'lovlar</h2>
                    <a href="#">Barcha xizmatlar</a>
                </div>
                <Slider />

                <div className="swiper-category">
                </div>
            </div>
        </div>)
}
export default Category