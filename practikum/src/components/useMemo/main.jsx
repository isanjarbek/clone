import React, { useState, useEffect, useMemo } from 'react'

function complete(num) {
    console.log('CompluteCompute')
    let i = 0
    while (i < 1000000) i++
    return num * 2
}
function Use() {
    const [number, setNumber] = useState(8)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? "blue" : "black"
        }
    }, [colored])

    // const computed = useMemo(() => {
    //     return complete(number)
    // }, [number])
    const computed = complete(number)

    useEffect(() => {
        console.log("Styles was change")
    }, [styles])

    return (
        <div className="container">
            <p style={styles}>Amout: {computed}</p>
            <button onClick={() => setNumber((prev) => prev + 1)}>Add</button>
            <button onClick={() => setNumber((prev) => prev - 1)}>Delete</button>
            <button onClick={() => setColored((prev) => !prev)}>Edit</button>
        </div>
    )
}
export default Use