import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

function useForm(initialValue) {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        onChange: e => setValue(e.target.value)
    }

}
export function Form(props) {

    const username = useForm('')
    const email = useForm('')
    const password = useForm('')

    return (
        <>
            <Input {...username} name="username" label="username" />
            <Input {...email} name="email" label="Email" />
            <Input {...password} name="password" label="Password" />
            <Button color='primary' variant='contained'> Submit </Button>
        </>
    )
}

function Input(props) {
    return (
        <>
            <TextField
                {...props}
                size='small'
                margin="normal"
                variant="outlined"
                type={props.type || 'text'}
            /><br />
        </>
    )
}