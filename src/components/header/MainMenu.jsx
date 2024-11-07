import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import LanguageSwitcher from '../services/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    const {t} = useTranslation();
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <img src="/img/logo/Logo.png" alt="Logo" />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li className="dropdown">
                        <Link to={"/"}>
                            {t('Home')}
                        </Link>
                    </li>
                    <li className="dropdown megamenu-fw">
                        <Link to={"/about-us"} className="">
                            {t('About')}
                        </Link>
                    </li>
                    <li className="dropdown">
                        <Link to={"/our-products"} className="">
                            {t('Products')}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us">
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <LanguageSwitcher />
                    </li>
                </ul>
                {/* <div className='language-switcher'> */}
                {/* </div> */}
            </div>
        </>
    );
};

export default MainMenu;