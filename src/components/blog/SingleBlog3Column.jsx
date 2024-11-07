import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import { useLocale } from '../services/LocaleContext';

const SingleBlog3Column = ({ blog }) => {
    const { sys, mainImage, name} = blog;
    const { locale } = useLocale();

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
                        <i className={`fa-solid ${locale === 'ar' ? "fa-arrow-left pe-2" : "fa-arrow-right ps-2" }`}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;