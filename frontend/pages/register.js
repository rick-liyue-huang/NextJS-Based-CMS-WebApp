import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';

const RegisterPage = () => {
  const handleRegister = (value) => {
    console.log(value);
  };

  return (
    <Row className={'ant-layout-content'} style={{ height: '100vh' }}>
      <Col span={8} offset={8}>
        <h2 style={{ paddingTop: '100px' }}>Register Form</h2>
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
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
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

          <Form.Item>
            <Button
              type="primary"
              ghost
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>{' '}
            Or{' '}
            <Link href="/login">
              <a>Joined already? Login now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterPage;
