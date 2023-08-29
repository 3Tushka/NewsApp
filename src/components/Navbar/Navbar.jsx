import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import "./_navbar.scss";

const Menu = () => (
    <>
        <li><Link to="/Homepage">Головна</Link></li>
        <li><Link to="/Business">Бізнес</Link></li>
        <li><Link to="/History">Історії</Link></li>
        <li><Link to="/Books">Книги</Link></li>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <div className="navbar__logo__news">
                    <span>News</span>
                </div>
                <div className="navbar__logo__country">
                    <span>Україна</span>
                </div>
            </div>
            <div className="navbar__box">

                <div className="navbar__smallscreen">
                    <MenuOutlined color="#000" onClick={() => setToggleMenu(true)} className="burger-icon" />

                    {toggleMenu && (
                        <div className="navbar__smallscreen_overlay">
                            <div className="smallscreen-box">
                                <div className="navbar-close">
                                    <CloseOutlined color="#000" onClick={() => setToggleMenu(false)} className="close-icon" />
                                </div>
                            </div>
                            <div className="smallscreen-content">
                                <ul className="smallscreen-content__links">
                                    <Menu />
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <ul className="navbar__box__links">
                    <Menu />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar