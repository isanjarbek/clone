import React from 'react'
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const CheckboxItem = () => {
    return (
        <div>
            <Checkbox onChange={onChange} >Checkbox</Checkbox>
            <Checkbox defaultChecked={false} disabled />
            <Checkbox defaultChecked disabled />
        </div>
    )
}
export default CheckboxItem