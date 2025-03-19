import React, { useState } from 'react';
import { Button, Steps, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import Content_1 from '../content_1';
import Content_2 from './content_2';
const steps = [
    {
        title: 'Step-1',
        content: <Content_1 />,
    },
    {
        title: 'Step-2',
        content: <Content_2 />,
    },
];
const Registration_1: React.FC = () => {
    const navigate = useNavigate();
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px  ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{
                marginTop: 24,

            }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => navigate('/')}>
                        Submit
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default Registration_1;