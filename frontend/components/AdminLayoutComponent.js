import React from 'react';
import { Layout } from 'antd';
import { AdminNavComponent } from './nav/AdminNavComponent';

const { Content } = Layout;

export const AdminLayoutComponent = ({ children }) => {
  return (
    <Layout>
      <AdminNavComponent />
      <Layout style={{ padding: '10px' }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
