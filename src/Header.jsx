import React from 'react';
import back from './Image/Left_Arrow-2-512.png';
import home from './Image/home-2-xxl.png';
import profile from './Image/proff.png';

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={back} alt="logo" />
      <img className="header-logo" src={home} alt="logo" />
      <img className="header-logo" src={profile} alt="logo" />
    </div>
  );
};
export default Header;
