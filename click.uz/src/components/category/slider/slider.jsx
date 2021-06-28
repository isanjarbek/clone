import React from 'react'
import './slider.css'

function Slider(props) {
    return (
        <div className="slider-item">
            <img src={props.image} alt=""/>
            <p>{props.text}</p>
        </div>
    )
}
export default Slider