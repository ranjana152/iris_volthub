import React, { useState } from "react";
import {
  UserOutlined,
  WalletOutlined,
  FileDoneOutlined,
  BellOutlined,
  PhoneOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Card,
  Typography,
  Row,
  Divider,
  Space,
  Flex,
  Avatar,
  Modal,
  Input
} from "antd";
import { FiMenu } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;



const ConfirmationPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isInsufficient, setInsufficient] = useState<boolean>(false);
  const [displayAmount, setdisplayAmount] = useState<boolean>(false);
  const [amount, setamount] = useState("");

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleClick = (e: { key: string }) => {
    if (e.key === "3") {
      navigate("/MyBookings");
    }
  };

  return (
    <Layout style={{ width: "210vh", height: "100vh" }}>
      {/* <Layout>  */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <FiMenu /> : <RxCross2 />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "20px",
            width: 64,
            height: 64,
            color: "white",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleClick}
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
            <Button
             onClick={() => setInsufficient(true)}
             >
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
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{ width: "600px", padding: "20px", borderRadius: "10px" }}
          >
            <Title level={5}>The Park Zone Connect, Avinashi Rd</Title>
            <Text type="secondary">
              4, Avinashi Road, Civil Aerodrome Post, Coimbatore
            </Text>

            <Divider />

            <Title level={5}>Charger A | Charge Point 1</Title>
            <Text>AC Type-2</Text>
            <br />
            <Text strong>₹38.85 / 15 mins (Estimated*)</Text>
            <br />
            <Text>Capacity: 7.4kW</Text>
            <br />
            <Text>
              Selected Session: <strong>1.15 AM - 2.00 AM (45 Mins)</strong>
            </Text>
            <br />
            <Text>
              Date: <strong>13 Jan 2025</strong>
            </Text>

            <Divider />

            {/* Fee Details */}
            <Row justify="space-between">
              <Text>Session fee</Text>
              <Text>₹470.00</Text>
            </Row>
            <Row justify="space-between">
              <Text>Booking fee</Text>
              <Text>₹90.00</Text>
            </Row>
            <Row justify="space-between">
              <Text strong>Total Amount</Text>
              <Text strong>₹560.00</Text>
            </Row>

            {/* Buttons */}
            <Space
              style={{
                width: "100%",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  background: "#E0E0E0",
                  border: "none",
                  width: "120px",
                }}
              >
                Edit
              </Button>
              <Button
                type="primary"
                style={{ width: "120px" }}
                onClick={()=>setIsModalVisible(true)}
              >
                Confirm
              </Button>
            </Space>
          </Card>
        </Content>
      </Layout>

      {/* booking confirmed */}
     
      <Modal open={isModalVisible} footer={null} closable={false} centered>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <CheckCircleOutlined style={{ fontSize: "40px", color: "green" }} />
          <Title level={4}>Your Booking is Confirmed!</Title>
          <Text>₹560.00 has been deducted from your wallet.</Text>
          <Button type="primary" onClick={()=>setIsModalVisible(false)} >
            OK
          </Button>
        </Space>
      </Modal>

      {/* insufficient balance */}
      <Modal
        open={isInsufficient}
        footer={null}
        closable={false}
        centered
      >
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <ExclamationCircleOutlined
            style={{ fontSize: "40px", color: "red" }}
          />
          <Title level={4}>Insufficient Balance!</Title>
          <Space direction="vertical" align="center">
            <Text>₹560.00</Text>
            <br />
            <Row justify="space-between" style={{ width: "120%" }}>
              <Button onClick={()=>setInsufficient(false)}>Cancel</Button>
              <Button
                type="primary"
                onClick={() => {
                  setdisplayAmount(true);
                  setInsufficient(false)
                }}
              >
                Add Money to your Wallet
              </Button>
            </Row>
          </Space>
        </Space>
      </Modal>

      {/* enter amount */}

      <Modal open={displayAmount} footer={null} closable={true} centered onCancel={()=>setdisplayAmount(false)}>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <Input
            placeholder="₹ Amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          />
          <Space>
            {[100, 500, 750, 1000].map((amt) => (
              <>
                <Button
                  key={amt}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "70px",
                    textAlign: "center",
                  }}
                >
                  ₹{amt}
                </Button>
              </>
            ))}
          </Space>
          <Flex>
            <Button
              type="primary"
              block
              style={{ marginTop: "15px", width: "150px" }}
              disabled={!displayAmount}
              onClick={() => console.log(amount)}
            >
              Proceed
            </Button>
          </Flex>
        </Space>
      </Modal>

    </Layout>
  );
};

export default ConfirmationPage;
