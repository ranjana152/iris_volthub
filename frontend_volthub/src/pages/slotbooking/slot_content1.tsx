/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Typography } from 'antd';
import { GoDotFill } from "react-icons/go";
import { BiNavigation } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import Connector_card from './connector_card';
const { Title, Text } = Typography;
const Slot_content1: React.FC = () => {
    return (
        <Flex wrap justify='space-between' gap='large'>
            <Flex gap="large" vertical>
                <Title style={{ marginBottom: 0 }} level={4}>CASAGRAND CHARGING STATION</Title>
                <Title style={{ marginTop: 0 }} level={5}>Peelamedu,Coimbatore,TamilNadu-641006</Title>
                <Flex wrap gap='middle'>
                    <Flex wrap gap='small'>
                        <GoDotFill color="green" />
                        <Text>Open</Text>
                    </Flex>
                    <Flex wrap gap='small'>
                        <IoMdTime color="blue" />
                        <Text>Open</Text>
                    </Flex>
                    <Flex wrap gap='small'>
                        <BiNavigation color="blue" />
                        <Text>Open</Text>
                    </Flex>
                </Flex>
                <Connector_card />
            </Flex>
        </Flex>
    );
};

export default Slot_content1;