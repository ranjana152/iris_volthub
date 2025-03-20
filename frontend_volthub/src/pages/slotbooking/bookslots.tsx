/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex } from 'antd';
import Slot_selection from './slots';
import Slot_content1 from './slot_content1';
const Slot_content2: React.FC = () => {
    return (
        <Flex wrap gap='large'>
            <Slot_content1 />
            <Slot_selection />
        </Flex>
    );
};

export default Slot_content2;