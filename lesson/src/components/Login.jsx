import React from 'react'
import { useHistory } from 'react-router'

function Login() {
    let history = useHistory()

    return (
        <div>
            <input type="text" placeholder="username"value="8"/>
            <input type="text" placeholder="password" />
            <button onClick={() => {history.push('/profile')}}>Login</button>
        </div>
    )
}

export default Login