import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV4 = ({ banner }) => {
    const { thumb, subTitle, title, text, btnText, btnLink, shape } = banner

    return (
        <>
            <div className="swiper-slides banner-style-four">
                <div className="banner-four-shape">
                    <img src={`/img/shape/${shape}`} alt="Image Not Found" />
                </div>
                <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/img/banner/${thumb})` }}></div>
            </div>
        </>
    );
};

export default SingleBannerV4;