import React, { useState } from 'react'
import './accorion.css'

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Accardion(props) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () =>{
        setClicked(!clicked)
    }

    return (
        <div className="accordion" >
            <div className="accordion-heading" onClick={handleClick}>
                <h3>{props.title}</h3>
                <div className="close">
                    {
                        clicked ? <BsChevronUp /> : <BsChevronDown />
                    }

                </div>
            </div>
            {
                clicked ?
                    <>
                        <div className="accoridon-content">
                            <p>{props.text} </p>
                        </div>
                    </>
                    : ""
            }
        </div >

    )
}

export default Accardion