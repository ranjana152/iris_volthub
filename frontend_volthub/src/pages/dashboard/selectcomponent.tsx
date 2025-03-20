import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

const Select_component: React.FC = () => (
    <Select
        showSearch
        placeholder="Select"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
            {
                value: 'jack',
                label: 'Jack',
            },
            {
                value: 'lucy',
                label: 'Lucy',
            },
            {
                value: 'tom',
                label: 'Tom',
            },
        ]}
    />
);

export default Select_component;