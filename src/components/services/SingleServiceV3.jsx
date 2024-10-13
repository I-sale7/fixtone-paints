import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV3 = ({ service }) => {
    const { id, imagesCollection, name } = service;

    console.log('service', service)

    return (
        <>
            <div className="services-style-three">
                {/* <i className={serviceIcon}></i>
                <h4><Link to={`/${btnLink}/${id}#`}>{serviceTitle}</Link></h4>
                <p>{serviceText}</p> */}
                <img src={imagesCollection.items[0].url} alt={name} />
                {/* <Link to={`/${btnLink}/${id}#`} className="btn-service">{btnText}<i className={btnIcon}></i></Link> */}
            </div>
        </>
    );
};

export default SingleServiceV3;