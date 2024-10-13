import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <img src="/img/logo/logo.png" alt="Logo" />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li className="dropdown">
                        <Link to="/" className="active" onClick={toggleSubMenu}>Home</Link>
                        {/* <ul className="dropdown-menu">
                            <li><Link to="/">Consulting Business</Link></li>
                            <li className="dropdown">
                                <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Home Dark Version</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/business-dark#">Consulting Business</Link></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li className="dropdown megamenu-fw">
                        <Link to={void (0)} className="" onClick={toggleSubMenu}>MegaMenu</Link>
                    </li>
                    <li className="dropdown">
                        <Link to={void (0)} className="" onClick={toggleSubMenu}>Services</Link>
                    </li>
                    <li className="dropdown">
                        <Link to={void (0)} className="" onClick={toggleSubMenu}>Blog</Link>
                    </li>
                    <li><Link to="/contact-us#">contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;