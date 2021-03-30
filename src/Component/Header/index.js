import React from 'react';
import '../Header/style.css';
function Header() {
  return (
    <div>
      <header>
        <nav>
       <div className='Header'>
       <div className="navBrand">
            <img id='navIcon'src="/assets/logo_venturus.png" alt="" />
            <h1>Squad Management Tool</h1>
          </div>
          <div className='userNav'>
            <p>John Doe</p>
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="profile" />
          </div>
       </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
