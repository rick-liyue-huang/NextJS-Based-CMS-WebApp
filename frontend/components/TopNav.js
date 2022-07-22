import { Menu } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { ToggleThemeComponent } from './ToggleTheme';
import Link from 'next/link';

export const TopNavComponent = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[current]}>
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <Link href={'/'}>
          <a>HOME</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="register" icon={<UserAddOutlined />}>
        <Link href={'/register'}>
          <a>REGISTER</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="login" icon={<UserOutlined />}>
        <Link href={'/login'}>
          <a>LOGIN</a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        style={{ marginLeft: 'auto' }}
        key="SubMenu"
        title="DASHBOARD"
        icon={<SettingOutlined />}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="three" icon={<ProfileOutlined />}>
            <Link href={'/admin'}>
              <a>Admin</a>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item key="alipay">
        <ToggleThemeComponent />
      </Menu.Item>
    </Menu>
  );
};
