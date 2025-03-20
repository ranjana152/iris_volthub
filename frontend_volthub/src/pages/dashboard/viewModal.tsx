import React from "react";
import { Modal, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import Slot_content1 from "../slotbooking/slot_content1";
interface Viewconnectorprops {
    open: boolean;
    onClose: () => void;
}
const ViewConnectorModal: React.FC<Viewconnectorprops> = ({ open, onClose }) => {
    const navigate = useNavigate();
    return (
        <Modal
            open={open}
            title="Choose Connectors"
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose}>Return</Button>,
                <Button key="submit" type="primary" onClick={() => navigate('/slotdashboard')}>
                    Book Slots
                </Button>,
            ]}
        >
            <Slot_content1 />
        </Modal>
    );
    
};

export default ViewConnectorModal;
