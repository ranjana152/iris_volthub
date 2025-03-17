import React, { useState } from 'react';
import { Button, Drawer, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import Login_content from './login_content';
const Login_layout: React.FC = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: '400px',
    width: '600px',
    paddingTop: 200,
    marginLeft: 50,
    overflow: 'hidden',
    background: 'lightgray',
    color: '#000',
    fontSize: '22px',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={containerStyle} id='login_layout'>
      VOLTHUB<br />
      EV Slot Booking System
      <div style={{ padding: '20px' }}>
        <Button type="primary" onClick={showDrawer} style={{ marginRight: '30px' }}>
          Login
        </Button>
        <Button type="primary" onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>
      <Drawer
        title="Let's get started!"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Login_content />
      </Drawer>
    </div>
  );
};

export default Login_layout;