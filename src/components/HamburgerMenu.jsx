import React, { useState } from 'react'

export default function HamburgerMenu() {

  const [menuIconToggle, setMenuIconToggle] = useState(true)
  
  const handleClickforMenuToggleIcon = () => {
    setMenuIconToggle(!menuIconToggle);
  }
 
  return (
    <div>
        {/* <img src="./img/ham_menu.png" alt="two lines hamburger menu" className='ham-menu'/> */}
        <button type="button" className={menuIconToggle ? "menu-toggle" : "menu-toggle x"} onClick={handleClickforMenuToggleIcon}></button>
    </div>
  )
}
