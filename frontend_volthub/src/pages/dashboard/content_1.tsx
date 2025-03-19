import React, { useState } from 'react';
import { Flex, Typography, Input, Button, Divider, Modal } from 'antd';
import { FaMap } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import type { GetProps } from 'antd';
import Select_component from './selectcomponent';
import Table_content from './table_content';
const { Title } = Typography;
type SearchProps = GetProps<typeof Input.Search>;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;


const DContent_1: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Flex gap="middle" vertical>
            <Flex vertical>
                <Flex justify='flex-start' vertical >
                    <Title style={{ marginTop: 0 }} level={3}>Find your Station</Title>
                    <Flex wrap gap="middle">
                        <Search style={{ width: '200px' }} placeholder="Search by location" onSearch={onSearch} enterButton />
                        <Button type="primary" icon={<FaMap />} onClick={showModal}>Plan a trip</Button>
                        <Modal title="Plan your trip" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Find Station">
                            <Flex gap='large' vertical>
                                <Input size="large" placeholder="Source Point" />
                                <Input size="large" placeholder="Destination Point" />
                            </Flex>
                        </Modal>
                    </Flex>
                    <Divider />
                    <Flex wrap gap="middle">
                        <Select_component />
                        <Select_component />
                        <Button type="primary" icon={<GrMap />}>Map View</Button>
                    </Flex>
                    <Divider />
                    <Table_content />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DContent_1;