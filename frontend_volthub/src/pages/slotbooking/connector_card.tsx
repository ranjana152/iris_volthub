import React from "react";
import { Card, Typography, Flex, Divider } from "antd";

const { Text, Link } = Typography;

const ChargerCard: React.FC = () => {
    return (
        <Card
            style={{
                width: 160,
                borderRadius: 12,
                border: "1px solid black",
                textAlign: "center",
                overflow: "hidden",
                padding: "0",
            }}
            styles={{
                body: { padding: 0 }
            }}
        >
            <Flex
                justify="center"
                align="center"
                style={{
                    backgroundColor: "#7DA3F5",
                    color: "black",
                    fontWeight: "bold",
                    padding: "5px",
                    fontSize: "16px",
                    fontFamily: "IBM Plex Mono",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            >
                Connector-A
            </Flex>
            <Flex vertical align="center" gap={5} style={{ padding: "10px 10px 0px 10px" }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#90FF90",
                        borderRadius: "50%",
                    }}
                ></div>
                <Text style={{ fontSize: 18, fontFamily: "IBM Plex Mono" }}>CCS-2</Text>
            </Flex>
            <Divider />
            <Flex justify="center" style={{ padding: "5px" }}>
                <Link style={{ fontSize: 14, fontFamily: "IBM Plex Mono", color: 'black' }}>View tariff</Link>
            </Flex>
        </Card>
    );
};

export default ChargerCard;
