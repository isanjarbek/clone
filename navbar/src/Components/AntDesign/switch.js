import React from 'react'
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const SwitchElements = () => {
    return (
        <div>
            <Switch defaultChecked />
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
            />
        </div>
    )
}
export default SwitchElements