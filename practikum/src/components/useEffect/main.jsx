import React, { useEffect, useState } from 'react'

function Effects() {
    const [user, setUser] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${user}`)
            .then(response => response.json())
            .then((json) => setData(json))
    }, [user])                                                  

    return (
        <div className="container">
            <p>{user}</p>
            <div className="btn-group">
                <button onClick={() => setUser("users")}>CLick(users)</button>
                <button onClick={() => setUser("posts")}>CLick(posts)</button>
                <button onClick={() => setUser("todos")}>CLick(todos)</button>
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Effects