import React from "react"
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default (props) => {
    const navigate = useNavigate();
    const clickMenu = (e) => {
        navigate('/')
    }
    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    onClick={clickMenu}
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={["Users", "Calendar"].map((item, index) => ({
                        key: String(index + 1),
                        label: `${item}`,
                    }))}
                />
            </Header>
            <Content className="site-layout" style={{ height: '100vh',padding:20, background:'#f2f2f2' }}>
                {props.children}
            </Content>
        </Layout>
    )
}