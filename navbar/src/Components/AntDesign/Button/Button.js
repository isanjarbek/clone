import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';

const style = { padding: '15px 25px', height: 'auto', fontSize: '16px' }

const Btn = () => {
    return (
        <div>
            <Button type="primary" style={style}>Button</Button>
        </div>
    )
}
export default Btn