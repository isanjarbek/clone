// import React, { useState } from 'react'
// import './style.css'

// function Calc() {

//     const [count, setCount] = useState(0)

//     function minusCount() {
//         setCount(count - 1)
//     }
//     function addCount() {
//         setCount(count + 1)
//     }
//     return (
//         <div className="group">
//             <button className="minus btn" onClick={minusCount}>-</button>
//             <span className="number">{count}</span>
//             <button className="plus btn" onClick={addCount}>+</button>

//         </div>
//     )
// }

// export default Calc

import React, { useState } from 'react'
import './style.css'

function Calc() {

    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState(false)
    return (
        <div className="group">
            <div className="item-1">
                <button className="minus btn" onClick={() => setCount(count - 1)}>-</button>
                <span className="number">{count}</span>
                <button className="plus btn" onClick={() => setCount(count + 1)}>+</button>
            </div>

            <div className="item-2">
                <button className="reset btn" onClick={() => setCount(0)}>Reset</button>
               
            </div>
            
        </div>
    )
}

export default Calc
