import React, { useState } from 'react';
import { Button } from 'antd';
import { ToggleThemeComponent } from '../components/ToggleTheme';

const Home = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Home page</h1>
      <ToggleThemeComponent />
    </div>
  );
};

export default Home;
