import React, { useEffect, useState } from 'react'
import { GrClose, GrMenu } from "react-icons/gr";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

import './menu.css'

function Menu() {
    const [open, setOpen] = useState(true);
    const handleClick = () => setOpen(!open);

    useEffect(() => {
        console.log('render')
    }, [])

    return (
        <div classNam="home">
            <div className="menu" onClick={handleClick}>
                {
                    open ? <GrMenu /> : <GrClose />
                }
            </div>
            <div className="item" onClick={handleClick}>
                {
                    open ? <BsFillHeartFill className="menu-icon" /> : <BsHeart className="menu-icon" />
                }
            </div>
        </div>
    )
}

export default Menu