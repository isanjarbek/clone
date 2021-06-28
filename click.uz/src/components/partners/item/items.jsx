import React from 'react'
import './item.css'

function Items(props) {
    return (
        <div className="items">
            <img src={props.pic} alt=""/>
            <h4>{props.text}</h4>
            <p>{props.small}</p>
            <p>{props.bottext}</p>
        </div>
    )
}

export default Items