import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import LogoIcon from '../../images/logo.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={LogoIcon} />
        </div>
        Team ORO
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#">
          ADMIN
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
