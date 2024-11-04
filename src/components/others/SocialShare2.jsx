import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link to="https://www.facebook.com/Fixtone.Paints" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://twitter.com/fixtone_paints?lang=en" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="https://www.instagram.com/fixtone.paints" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
        </>
    );
};

export default SocialShare2;