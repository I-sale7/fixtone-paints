import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlog3Column = ({ blog }) => {
    const { sys, mainImage, name} = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="product-thumb thumb">
                    <Link to={`/project-details/${sys.id}#`}><img src={`${mainImage.url}`} alt="Image Not Found" /></Link>
                </div>
                <div className="info">
                    <h2 className="post-title"><Link to={`/project-details/${sys.id}#`}>{name}</Link></h2>
                    <Link to={`/project-details/${sys.id}#`} className="button-regular">
                        {"Continue Reading"}
                        <i className={"fa-solid fa-arrow-right"}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;