import React from "react";
import { Modal, Flex, Input } from 'antd';
interface Viewconnectorprops {
    open: boolean;
    onClose: () => void;
}
const PlanatripModal: React.FC<Viewconnectorprops> = ({ open, onClose }) => {
    return (
        <Modal
            title="Plan your trip"
            open={open}
            // onOk={onClose}
            onCancel={onClose}
            okText="Find Station">
            <Flex gap='large' vertical>
                <Input size="large" placeholder="Source Point" />
                <Input size="large" placeholder="Destination Point" />
            </Flex>
        </Modal>
    );

};

export default PlanatripModal;
