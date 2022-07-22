import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';

const LoginPage = () => {
  const handleRegister = (value) => {
    console.log(value);
  };

  return (
    <Row className={'ant-layout-content'} style={{ height: '100vh' }}>
      <Col span={8} offset={8}>
        <h2 style={{ paddingTop: '100px' }}>Login Form</h2>
        <br />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleRegister}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Link href={'/forget-password'}>
            <a>Forget Password</a>
          </Link>
          <br />
          <br />
          <Form.Item>
            <Button
              type="primary"
              ghost
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <br />
            <Link href="/register">
              <a>Not yet register? Create one now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
