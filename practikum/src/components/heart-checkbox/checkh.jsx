import React, { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import './checkbox.css'

function Heartcheck() {
    const [change, setChange] = useState(true)
    const handleChange = () => setChange(e => !e)

    if (change) {
        return <div className="relative">
            <BsHeart
                onClick={handleChange}
                color='#1273EB'
                className="heart position"
            />
        </div>
    }
    else {
        return <div className="relative">
            <BsFillHeartFill
                className="heart position"
                onClick={handleChange} />
        </div>
    }
}

export default Heartcheck