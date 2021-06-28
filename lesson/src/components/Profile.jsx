import React from 'react'
import { Redirect } from 'react-router'

function Profile({ authorized }) {
    if (!authorized) {
        return <Redirect to="/login"/>
    }
    return (
        <div>
            <h1>IF you are here, you are allowed to be arrowed</h1>
        </div>
    )
}

export default Profile