import React, { useState } from 'react'
import './input.css'

function Input() {
    const [data, setData] = useState('')
    const [print, setPrint] = useState(false)
    const [change, setChange] = useState(false)

    const getData = val => {
        setData(val.target.value)
        setPrint(false)
    }
    const handleChange = (val) => {
        setData(val.target.value == '')
    }
    return (
        <div className="box">
            <div className="input">
                <input
                    type="text"
                    className="input-box"
                    onChange={getData}
                />
                <button onClick={() => setPrint(true)} className="btn">PRINT</button>
                <button className="btn" onClick={handleChange}>DELETE</button>
                {
                    print ?
                        <h3 className="data">{data}</h3>
                        :
                        ''
                }
            </div>
        </div>
    )
}
export default Input