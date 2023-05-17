import React from 'react'
import tattooImage from '/Users/vinsonwong/projects/raymondtattoo/raymond/src/assets/rayd-IMAGE.png'
import './header.css';

const Header = () => {
  return (
    <div className="header__container">
      <img src={tattooImage} alt="tattooimage" className='mainImage' />
      <div className="ighandle">
        <h1 className="rayd">rayd_ink</h1>
        <h2 className="rayd">Chronic Ink</h2>
      </div>
    </div>
  )
}

export default Header