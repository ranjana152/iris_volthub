import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Flex } from 'antd';
import Registration_1 from './registration_1';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;
const Registration_layout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh', width: '210vh', margin: 'auto' }}>
            <Header
                style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightgray' }}>
                <Flex wrap gap='large'>
                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'black', marginRight: '160px' }}> VOLTHUB</div>
                    <div style={{ fontSize: '18px', color: 'gray' }}> Register Yourself!</div>
                </Flex>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        backgroundColor: 'lightgray'
                    }}>
                </Menu>
            </Header>
            <Content style={{
                padding: '0 48px',
                width: '800px',
                margin: 'auto'
            }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/">Login</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Registration_1 />
                </div>
            </Content>
        </Layout>
    );
};

export default Registration_layout;