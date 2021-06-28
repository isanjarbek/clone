import { IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";

function Input() {
    const [visible, setVisible] = useState(false)

    const Icon = <IconButton
        icon={visible ? <BiHide /> : <BiShow />}
        onClick={() => setVisible(vsb => !vsb)}
    />

    const InputType = visible ? "text" : "password"

    return [InputType, Icon]
}

export default Input