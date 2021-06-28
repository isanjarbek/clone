import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [value, setValue] = useState("default");
    const renderCount = useRef(1);
    const inputRef = useRef(null)
    const prevValue = useRef("")

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current.value)
    })
    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div className="container">
            <p>Amout of rendering {renderCount.current}</p>
            <p>past value {prevValue.current}</p>
            <input
                ref={inputRef}
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={focus}>Click Me</button>

        </div>
    )
}

export default UseRef