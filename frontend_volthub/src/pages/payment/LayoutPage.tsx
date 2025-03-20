import React, { useState } from "react";
import {
  UserOutlined,
  WalletOutlined,
  FileDoneOutlined,
  BellOutlined,
  PhoneOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Typography,
  Row,
  Space,
  Flex,
  Avatar,
  Modal,
  Input,
} from "antd";
import { FiMenu } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;

interface LayoutProp {
  Component: React.FC;
}

const LayoutPage: React.FC<LayoutProp> = ({ Component }) => {
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isInsufficient, setInsufficient] = useState<boolean>(false);
  const [displayAmount, setdisplayAmount] = useState<boolean>(false);
  const [amount, setamount] = useState("");

  const navigate = useNavigate();
  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
          onClick={handleMenuClick}
          items={[
            {
              key: "/dashboard",
              icon: <HomeOutlined />,
              label: "Dashboard",
            },
            {
              key: "/hh",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "/jj",
              icon: <FaMap />,
              label: "Map",
            },
            {
              key: "/MyBookings",
              icon: <FileDoneOutlined />,
              label: "MyBookings",
            },
            {
              key: "/ll",
              icon: <BellOutlined />,
              label: "Notification",
            },
            {
              key: "ooo/",
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
 <Title
            level={3}
            style={{
              fontFamily: "inherit",
              margin: "auto 0",
              fontWeight: "bold",
            }}
          >
            VOLTHUB
          </Title>
          <Space>
            <Button onClick={() => setInsufficient(true)}>
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
          <Component />
        </Content>
      </Layout>

      {/* booking confirmed */}

      {/* insufficient balance */}
      <Modal open={isInsufficient} footer={null} closable={false} centered>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <ExclamationCircleOutlined
            style={{ fontSize: "40px", color: "red" }}
          />
          <Title level={4}>Insufficient Balance!</Title>
          <Space direction="vertical" align="center">
            <Text>₹560.00</Text>
            <br />
            <Row justify="space-between" style={{ width: "120%" }}>
              <Button onClick={() => setInsufficient(false)}>Cancel</Button>
              <Button
                type="primary"
                onClick={() => {
                  setdisplayAmount(true);
                  setInsufficient(false);
                }}
              >
                Add Money to your Wallet
              </Button>
            </Row>
          </Space>
        </Space>
      </Modal>

      {/* enter amount */}

      <Modal
        open={displayAmount}
        footer={null}
        closable={true}
        centered
        onCancel={() => setdisplayAmount(false)}
      >
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

export default LayoutPage;
