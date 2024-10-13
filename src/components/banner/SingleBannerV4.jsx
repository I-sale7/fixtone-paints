import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV4 = ({ banner }) => {
    const { image, description, title, id } = banner

    return (
        <>
            <div className="swiper-slides banner-style-four">
                <div className="">
                    <img src={`${image.url}`} alt={`${image.title}`} />
                </div>
                {/* <div className="banner-thumb bg-cover shadow dark" style={{ background: `${image.url}` }}></div> */}
            </div>
        </>
    );
};

export default SingleBannerV4;