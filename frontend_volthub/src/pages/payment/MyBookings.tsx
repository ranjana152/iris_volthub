import React, { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Layout,
  Typography,
  Space,
  Card,
  Popconfirm,
  Modal,
} from "antd";
const { Content } = Layout;
const { Title, Text } = Typography;

const MyBookings: React.FC = () => {
  const [selectedBooking, setSelectedBooking] = useState<boolean>(false);
  const [cancellationSuccess, setcancellationSuccess] =
    useState<boolean>(false);

  return (
    <>
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
            <Text strong>Selected Session: 1.15 AM - 2.00 AM (45 Mins)</Text>
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
    </>
  );
};

export default MyBookings;
