import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV3 = ({ service }) => {
    const { sys, mainImage, name, btnLink } = service;


    return (
        <>
            <div className="services-style-three product-box">
                <img src={mainImage.url} alt={name} />
                <h4 className='product__title'>
                    <Link className='d-flex flex-column gap-3' to={`/${btnLink}/${sys.id}`}>
                        {name}
                        <i className='fa-solid btn-service fa-arrow-right'></i>
                    </Link>
                </h4>
                <div className='product__link'>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;