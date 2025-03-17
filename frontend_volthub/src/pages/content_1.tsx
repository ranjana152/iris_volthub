import React from 'react';
import {
    Form,
    Input,
} from 'antd';
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

const Content_1: React.FC = () => {
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
            <Form.Item label="Firstname" name="firstname" rules={[{ required: true, message: 'Please enter firstname!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Lastname" name="lastname" rules={[{ required: true, message: 'Please enter lastname!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email-id" name="email" rules={[{ required: true, message: 'Please enter Email-id!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Mobileno" name="mobileno" rules={[{ required: true, message: 'Please enter mobile no!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item label="Re-Password" name="re-password" rules={[{ required: true, message: 'Please enter your password!' }]}>
                <Input.Password />
            </Form.Item>
        </Form>
    );
};

export default Content_1;