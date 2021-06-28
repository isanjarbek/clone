import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const style = { background: 'pink', color: 'white' }
const style2 = { background: 'orange', color: 'white' }
const LayoutC = () => {
    return (
        <div>
            <Layout>
                <Header style={style}>Header</Header>
                <Content style={style}>Content</Content>
                <Footer style={style}>Footer</Footer>
            </Layout>

            <Layout>
                <Header style={style2}>Header</Header>
                <Layout>
                    <Sider style={style2}>Sider</Sider>
                    <Content style={style2}>Content</Content>
                </Layout>
                <Footer style={style2}>Footer</Footer>
            </Layout>
        </div>
    )
}
export default LayoutC