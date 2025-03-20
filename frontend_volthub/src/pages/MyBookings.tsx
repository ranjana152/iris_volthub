import React, { useState } from "react";
import {
  UserOutlined,
  FileDoneOutlined,
  BellOutlined,
  PhoneOutlined,
  WalletOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Flex,
  Typography,
  Space,
  Avatar,
  Card,
  Popconfirm,
  Modal,
} from "antd";
import { FiMenu } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;

const Dashboard_layout: React.FC = () => {
  const [selectedBooking, setSelectedBooking] = useState<boolean>(false);
  const [cancellationSuccess, setcancellationSuccess] =
    useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", width: "210vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <FiMenu /> : <RxCross2 />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "20px",
            width: 60,
            height: 60,
            color: "#fff",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <FaMap />,
              label: "Map",
            },
            {
              key: "3",
              icon: <FileDoneOutlined />,
              label: "MyBookings",
            },
            {
              key: "4",
              icon: <BellOutlined />,
              label: "Notification",
            },
            {
              key: "5",
              icon: <PhoneOutlined />,
              label: "Contact",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "lightgray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title level={3} style={{ margin: "auto 0" }}>
            VOLTHUB
          </Title>
          <Space>
            <Button>
              <WalletOutlined
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
              <Text>₹0.00</Text>
            </Button>
            <Flex vertical style={{ paddingLeft: "20px" }}>
              <Text>UserName</Text>
              <Link style={{ color: "red" }}>SignOut</Link>
            </Flex>
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 500,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: "flex",
          }}
        >
          <Card
            title="The Park Zone Connect, Avinashi Rd"
            // bordered={false}
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Text>4, Avinashi Road, Civil Aerodrome Post, Coimbatore</Text>
            <br />
            <Text strong>13 Jan 2025 | 1.15 AM - 2.00 AM (45 Mins)</Text>
            <br />
            <Button
              type="primary"
              onClick={() => setSelectedBooking(true)}
              style={{ marginTop: "10px" }}
            >
              View
            </Button>
          </Card>
          {selectedBooking && (
            <Content
              style={{
                background: "#fff",
                padding: "20px",
                marginLeft: "20px",
                borderRadius: "8px",
                flex: 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Title level={4}>The Park Zone Connect, Avinashi Rd</Title>
              <Text>4, Avinashi Road, Civil Aerodrome Post, Coimbatore</Text>
              <br />
              <Card bordered={false} style={{ marginTop: "10px" }}>
                <Text strong>Charger A | Charge Point 1</Text>
                <br />
                <Text>AC Type-2</Text>
                <br />
                <Text>Capacity: 7.4kW</Text>
                <br />
                <Text strong>
                  Selected Session: 1.15 AM - 2.00 AM (45 Mins)
                </Text>
                <br />
                <Text>Date: 13 Jan 2025</Text>
                <br />
                <Card
                  bordered={false}
                  style={{ marginTop: "10px", background: "#f5f5f5" }}
                >
                  <Text>Total Amount: ₹ 560.00</Text>
                  <br />
                  <Text>Booking Fee: - ₹ 90.00</Text>
                  <br />
                  <Text strong>Total Refund Amount: ₹ 470.00</Text>
                </Card>
                <Popconfirm
                  title="Cancel Booking"
                  description="Are you sure want to confirm cancelleation? "
                  okText="Confirm"
                  cancelText="Cancel"
                  onConfirm={() => setcancellationSuccess(true)}
                >
                  <Button
                    type="default"
                    danger
                    style={{ marginTop: "10px", width: "50%" }}
                  >
                    Cancel Booking
                  </Button>
                </Popconfirm>
              </Card>
            </Content>
          )}
        </Content>
      </Layout>

      {/* Successfully cancelled */}
      <Modal open={cancellationSuccess} footer={null} closable={false} centered>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <CheckCircleOutlined style={{ fontSize: "40px", color: "green" }} />
          <Title level={4}>Refund Processed successfully!</Title>
          <Text>₹470.00</Text>

          <Text>
            Amount will be refunded to your Volt Hub Wallet within 5-10 Hours.
          </Text>
          <Button type="primary" onClick={() => setcancellationSuccess(false)}>
            OK
          </Button>
        </Space>
      </Modal>
    </Layout>
  );
};

export default Dashboard_layout;
