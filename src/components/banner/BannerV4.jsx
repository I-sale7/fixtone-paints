import React from 'react';
import { useRef } from 'react';
import SingleBannerV4 from './SingleBannerV4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Keyboard, Pagination } from 'swiper/modules';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { heroBannerCollection } from '../../gqlSchemas/banner';

const BannerV4 = () => {

    const SlideRef = useRef()

    const handleNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
    }

    const heroBanners = ContentfulGraphQl(heroBannerCollection);

    if(heroBanners?.heroBannerCollection?.items) {
        const banners = heroBanners?.heroBannerCollection?.items;
        return (
            <>
                <div className="banner-area bg-gray navigation-circle banner-style-four-area zoom-effect overflow-hidden text-light">
                    <div className="banner-style-one-carousel">
                        <div className="swiper-wrappers">
                            <Swiper
                                ref={SlideRef}
                                modules={[Keyboard, Pagination, EffectFade]}
                                effect={'fade'}
                                slidesPerView={1}
                                loop={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                    type: 'bullets',
                                }}
                                fadeEffect={{
                                    crossFade: true
                                }}
                            >
                                {banners.map(banner =>
                                    <SwiperSlide key={banner.id}>
                                        <SingleBannerV4 banner={banner} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className="swiper-button-prev" onClick={handlePrev}></div>
                        <div className="swiper-button-next" onClick={handleNext}></div>
                    </div>
                </div>
            </>
        );
    }
};

export default BannerV4;