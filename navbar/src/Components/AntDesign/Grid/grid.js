import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const style = { background: '#0092FF' }

const Grid = () => {
    return (
        <div>
            <Row className="col">
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            {/* <Row >
                <Col span={6} style={style}>col-6</Col>
                <Col span={6} style={style}>col-6</Col>
                <Col span={6} style={style}>col-6</Col>
                <Col span={6} style={style}>col-6</Col>
            </Row> */}
            <Row gutter={16} justify="space-between">
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>

            <Row>
                <Col style={style} flex={2}>2 / 5</Col>
                <Col style={style} flex={3}>3 / 5</Col>
            </Row>
           
        </div>
    )
}
export default Grid