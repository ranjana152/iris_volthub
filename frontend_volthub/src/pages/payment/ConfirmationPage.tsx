import React, { useState } from "react";
import { Button, Card, Typography, Row, Divider, Space, Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ConfirmationPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "600px", padding: "20px", borderRadius: "10px" }}>
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
            onClick={() => navigate('/slotdashboard')}
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
            onClick={() => setIsModalVisible(true)}
          >
            Confirm
          </Button>
        </Space>
      </Card>
      <Modal open={isModalVisible} footer={null} closable={false} centered>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <CheckCircleOutlined style={{ fontSize: "40px", color: "green" }} />
          <Title level={4}>Your Booking is Confirmed!</Title>
          <Text>₹560.00 has been deducted from your wallet.</Text>
          <Button type="primary" onClick={() => setIsModalVisible(false)}>
            OK
          </Button>
        </Space>
      </Modal>
    </>
  );
};
export default ConfirmationPage;
