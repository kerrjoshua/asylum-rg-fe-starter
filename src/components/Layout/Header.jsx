import React from 'react';
import { Image } from 'antd';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

import NavBar from '../nav-bar';

const { primary_accent_color } = colors;
function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{
          border: '2px solid red',
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          backgroundColor: primary_accent_color,
        }}
      >
        <NavBar />
      </div>
    </div>
  );
}

export { HeaderContent };
