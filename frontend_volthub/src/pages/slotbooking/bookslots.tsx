/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Flex } from 'antd';
import Slot_selection from './slots';
import Slot_content1 from './slot_content1';
import { useNavigate } from 'react-router-dom';
const Slot_content2: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Flex wrap gap={100} style={{ margin: 'auto' }}>
            <Flex vertical>
                <Slot_content1 />
                <Button type='primary' onClick={() => navigate('/confirmationpage')} style={{ marginTop: 40 }}>Confirm Booking</Button>
            </Flex>
            <Slot_selection />
        </Flex>

    );
};

export default Slot_content2;