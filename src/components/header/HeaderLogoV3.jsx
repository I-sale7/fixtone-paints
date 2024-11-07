import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const HeaderLogoV3 = ({ logoColor = false, openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/#">
                    <img src="/img/logo/Logo.png" className="logo" alt="Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogoV3;