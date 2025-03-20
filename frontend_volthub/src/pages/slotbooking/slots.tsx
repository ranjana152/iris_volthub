import React from "react";
import { Card, Row, Col, Typography, Flex, Button } from "antd";

const { Title } = Typography;
const slotData = [
    { start: "10.00 am", end: "11.00 am", slots: ["10.00 am", "10.15 am", "10.30 am", "10.45 am"] },
    { start: "11.00 am", end: "12.00 pm", slots: ["11.00 am", "11.15 am", "11.30 am", "11.45 am"] },
    { start: "10.00 am", end: "11.00 am", slots: ["10.00 am", "10.15 am", "10.30 am", "10.45 am"] },
    { start: "10.00 am", end: "11.00 am", slots: ["10.00 am", "10.15 am", "10.30 am", "10.45 am"] },
    { start: "10.00 am", end: "11.00 am", slots: ["10.00 am", "10.15 am", "10.30 am", "10.45 am"] },
];

const Slot_selection: React.FC = () => {
    return (
        <Card
            title={<Title level={3} style={{ margin: 0, color: "#fff", padding: 'auto', background: "#6c8cd5" }}>Book your slots</Title>}
            style={{ width: "50%", margin: "0", marginTop: "20px", }}
            bodyStyle={{ background: "#fff", }}
        >
            <Flex vertical gap='large'>
                <Flex wrap gap='middle' justify="center">
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                </Flex>
                <Flex wrap gap='middle' justify="center">
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                </Flex>
                <Flex wrap gap='middle' justify="center">
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                    <Button type='primary'>one</Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Slot_selection;
