import React from 'react';
import type { CheckboxProps } from 'antd';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Flex
} from 'antd';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const Content_2: React.FC = () => {
    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);
    return (
        <Form
            {...formItemLayout}
            form={form}
            variant={variant || 'outlined'}
            style={{
                maxWidth: 800,
                padding: 20
            }}
            initialValues={{ variant: 'outlined' }}
        >
            <Form.Item name="oem" label="Vehicle manufacturer" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a manufacturer"
                    allowClear
                >
                    <Option value="male">option1</Option>
                    <Option value="female">option2</Option>
                    <Option value="other">option3</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Year of manufacturer" name="year" rules={[{ required: true, message: 'Please enter lastname!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="model" label="Vehicle model" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a model"
                    allowClear
                >
                    <Option value="one">option1</Option>
                    <Option value="two">option2</Option>
                    <Option value="other">option3</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Registration number" name="regnumber" rules={[{ required: true, message: 'Please enter registration number!' }]}>
                <Flex wrap gap="middle">
                    <Input placeholder='TN' style={{ width: 50 }} />
                    <Input placeholder='38' style={{ width: 50 }} />
                    <Input placeholder='AA' style={{ width: 50 }} />
                    <Input placeholder='1001' style={{ width: 70 }} />
                </Flex>
            </Form.Item>
            <Form.Item label="Notification" name="notification" rules={[{ required: true, message: 'Please check one preference!' }]}>
                <Flex wrap gap="middle">
                    <Checkbox onChange={onChange}>SMS</Checkbox>
                    <Checkbox onChange={onChange}>E-mail</Checkbox>
                </Flex>
            </Form.Item>
            <Form.Item name="reminders" label="Set reminders" rules={[{ required: true }]}>
                <Select
                    placeholder="Select time"
                    allowClear
                >
                    <Option value="one">option1</Option>
                    <Option value="two">option2</Option>
                    <Option value="other">option3</Option>
                </Select>
            </Form.Item>
        </Form>
    );
};

export default Content_2;