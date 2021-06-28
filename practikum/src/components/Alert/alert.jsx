import React, { useContext } from 'react'
import {AlertContext} from '../main'

function Alert() {
    const alert = useContext(AlertContext)
    return (
        <div className={'alert alert-danger'}>
            <p>Noto'g'ri xabar jo'natildi.</p>
        </div>
    )
}

export default Alert