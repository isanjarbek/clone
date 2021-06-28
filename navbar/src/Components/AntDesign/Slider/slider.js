import React from 'react'
import { Slider } from 'antd';

function formatter(value) {
    return `${value}`;
}
const style = { width: '300px'   }
const style2 = {
    display: 'flex',
    height: 200,
    marginLeft: 70,
  };
const SliderForm = () => {
    return (
        <div style={style}>
            <Slider tipFormatter={formatter} />
            <Slider tipFormatter={null} />
            <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />

            <div style={style2}>
            <Slider vertical tipFormatter={formatter} />
            <Slider vertical tipFormatter={null} />
            <Slider vertical range={{ draggableTrack: true }} defaultValue={[20, 50]} />
            </div>
        </div>
    )
}
export default SliderForm