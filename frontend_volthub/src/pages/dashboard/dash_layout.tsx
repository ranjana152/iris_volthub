import React, { useState } from 'react';
import {
    UserOutlined,
    FileDoneOutlined,
    BellOutlined,
    PhoneOutlined,
    WalletOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Flex, Typography, Space, Avatar } from 'antd';
import { FiMenu } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Text, Title, Link } = Typography;
interface DashboardLayoutProps {
    Component: React.FC;
}
const Dashboard_layout: React.FC<DashboardLayoutProps> = ({ Component }) => {
    const navigate = useNavigate();
    const handleMenuClick = (e: any) => {
        navigate(e.key);
    };
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
                    onClick={handleMenuClick}
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: '/dashboard',
                            icon: <HomeOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/hh',
                            icon: <UserOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: '/jj',
                            icon: <FaMap />,
                            label: 'Map',
                        },
                        {
                            key: '/j',
                            icon: <FileDoneOutlined />,
                            label: 'MyBookings',
                        },
                        {
                            key: '/ll',
                            icon: <BellOutlined />,
                            label: 'Notification',
                        },
                        {
                            key: 'ooo/',
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
                    <Component />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard_layout;