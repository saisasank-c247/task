import { Layout, Menu } from 'antd';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;

export default (props) => {
    const navigate = useNavigate();
    const [menu,setMenu] = useState('1');
    const clickMenu = (e) => {
        setMenu(e.key)
        console.log(e)
        if(e.key == '1')
        navigate('/')
        else 
        navigate('/calendar')
    }
    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    onClick={clickMenu}
                    mode="horizontal"
                    defaultSelectedKeys={[menu]}
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