import {
  CameraOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  MessageOutlined,
  ProfileOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';
import { Button, Menu, Layout } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useWindowWidth } from '@react-hook/window-size';
import { ThemeContext } from '../../context/theme';

const { Sider } = Layout;

export const AdminNavComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('');

  const [theme, setTheme] = useContext(ThemeContext);

  const windowWidth = useWindowWidth();
  // console.log(windowWidth);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  useEffect(() => {
    if (windowWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [windowWidth]);

  // process.browser && console.log(window.location.pathname);
  const activeName = (name) => `${current === name && 'active'}`;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      reverseArrow={true}
      theme={theme}
    >
      <Menu defaultOpenKeys={['sub1', 'sub2', 'sub3']} mode="inline">
        <Menu.Item key={'1'} icon={<SettingOutlined />}>
          <Link href={'/admin'}>
            <a className={activeName('/admin')}>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* Posts part */}
        <Menu.SubMenu key={'sub1'} icon={<AppstoreOutlined />} title={'Posts'}>
          <Menu.Item key={'2'}>
            <Link href={'/admin/posts'}>
              <a className={activeName('/admin/posts')}>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={'3'}>
            <Link href={'/admin/posts/new'}>
              <a className={activeName('/admin/posts/new')}>Add Post</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={'4'}>
            <Link href={'/admin/categories'}>
              <a className={activeName('/admin/categories')}>All Categories</a>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Media part */}
        <Menu.SubMenu key={'sub2'} icon={<CameraOutlined />} title={'Media'}>
          <Menu.Item key={'5'}>
            <Link href={'/admin/media/library'}>
              <a className={activeName('/admin/media/library')}>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={'6'}>
            <Link href={'/admin/media/new'}>
              <a className={activeName('/admin/media/new')}>Add Library</a>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Comment part */}
        <Menu.Item key={'7'} icon={<MessageOutlined />}>
          <Link href={'/admin/comments'}>
            <a className={activeName('/admin/comments')}>Comments</a>
          </Link>
        </Menu.Item>

        {/* User part*/}
        <Menu.SubMenu key={'sub3'} icon={<UserOutlined />} title={'Users'}>
          <Menu.Item key={'8'}>
            <Link href={'/admin/users'}>
              <a className={'/admin/users'}>All Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={'9'}>
            <Link href={'/admin/users/new'}>
              <a className={activeName('/admin/users/new')}>Add User</a>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Profile part*/}
        <Menu.Item key={'10'} icon={<ProfileOutlined />}>
          {/* TODO */}
          <Link href={'/admin/userid'}>
            <a className={activeName('/admin/userid')}>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
        <Menu.Item key={'11'} icon={<BgColorsOutlined />}>
          <Link href={'/admin/customize'}>
            <a className={activeName('/admin/customize')}>Customize</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
