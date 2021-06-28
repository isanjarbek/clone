import React from 'react'
import './style.css'

function Paper(props) {
    return (
        <div className="paper">
            <div className="paper-item">
                <img src={props.image} alt="" />
                <h4>{props.matn}</h4>
                <p>{props.use}</p>
            </div>
        </div>
    )
}

export default Paper