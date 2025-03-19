import React, { useState } from 'react';
import {
    UserOutlined,
    FileDoneOutlined,
    BellOutlined,
    PhoneOutlined,
    WalletOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Flex, Typography, Space, Avatar } from 'antd';
import { FiMenu } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import DContent_1 from './content_1';

const { Header, Sider, Content } = Layout;
const { Text, Title, Link } = Typography;
const Dashboard_layout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh', width: '210vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Button
                    type="text"
                    icon={collapsed ? <FiMenu /> : <RxCross2 />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '20px',
                        width: 60,
                        height: 60,
                        color: '#fff',
                    }}
                />
                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: '2',
                            icon: <FaMap />,
                            label: 'Map',
                        },
                        {
                            key: '3',
                            icon: <FileDoneOutlined />,
                            label: 'MyBookings',
                        },
                        {
                            key: '4',
                            icon: <BellOutlined />,
                            label: 'Notification',
                        },
                        {
                            key: '5',
                            icon: <PhoneOutlined />,
                            label: 'Contact',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-between' }}>
                    <Title level={3} style={{ fontFamily: 'inherit', margin: 'auto 0', fontWeight: 'bold' }}>VOLTHUB</Title>
                    <Space>
                        <Button>
                            <WalletOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
                            <Text>₹0.00</Text>
                        </Button>
                        <Flex vertical style={{ paddingLeft: '20px' }}>
                            <Text>UserName</Text>
                            <Link style={{ color: 'red' }}>SignOut</Link>
                        </Flex>
                        <Avatar icon={<UserOutlined />} />
                    </Space>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 500,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <DContent_1 />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard_layout;