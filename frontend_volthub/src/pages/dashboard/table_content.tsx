import React, { useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
import ViewConnectorModal from './viewModal';
interface DataType {
    key: string;
    stationname: string;
    address: string;
    distance: number;
    connectors: string[];
}
const Table_content: React.FC = () => {
    // const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    // const showModal = () => {
    //     setOpen(true);
    // };

    // const handleOk = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //         setOpen(false);
    //     }, 3000);
    // };

    // const handleCancel = () => {
    //     setOpen(false);
    // };

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Station Name',
            dataIndex: 'stationname',
            key: 'stationname',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Distance (kms)',
            dataIndex: 'distance',
            key: 'distance',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Connectors',
            dataIndex: 'connectors',
            key: 'connectors',
            render: (_, { connectors }) => (
                <>
                    {connectors.map((connector) => {
                        let color = connector.length > 5 ? 'geekblue' : 'green';
                        if (connector === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={connector}>
                                {connector}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'View Details',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button type="link" onClick={() => setOpen(true)}>View</Button>
                    <ViewConnectorModal open={open} onClose={() => setOpen(false)} />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            stationname: 'Station 1',
            distance: 5.2,
            address: 'New York, NY',
            connectors: ['CCS', 'CHAdeMO'],
        },
        {
            key: '2',
            stationname: 'Station 2',
            distance: 12.4,
            address: 'San Francisco, CA',
            connectors: ['Type2'],
        },
        {
            key: '3',
            stationname: 'Station 3',
            distance: 8.9,
            address: 'Los Angeles, CA',
            connectors: ['CCS', 'Type2'],
        },
    ];

    return (
        <>
            <Table<DataType> columns={columns} dataSource={data} />
        </>
    );
};

export default Table_content;
