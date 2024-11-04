import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';
import ShowCaseV2Data from '../../jsonData/ShowCaseV2Data.json'
import SingleShowCaseV2 from './SingleShowCaseV2';
import { useRef } from 'react';
import partnersQuery from '../../gqlSchemas/partners';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { Link } from 'react-router-dom';
import { useLocale } from '../services/LocaleContext';

const ShowCaseV2 = () => {

    const {locale} = useLocale();
    const data = ContentfulGraphQl(partnersQuery(locale));

    if(!data) return;

    const partners = data?.partnersCollection?.items;

    return (
        <>
            <div className="case-studies-area default-padding" style={{ backgroundImage: `url(/img/shape/30.png)` }}>
                <div className="container">
                    <div className="case-carousel">
                        <div className="heading-left">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 m-auto">
                                    <div className="content-center text-center">
                                        <h5 className="sub-title">Our Partners</h5>
                                        <h2 className="heading">Check our partners and their products</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-stretch">
                            { partners.map( (partner, index)  => (
                                <div key={index} className='partners-box d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-1 wrapper position-relative rounded mx-auto my-auto shadow-lg'>
                                    <Link className='position-absolute wrapper container-full m-auto no-padding' to={partner.link} target="_blank" />
                                    <img src={partner.image.url} className='no-padding'/>
                                </div> 
                                ))
                            }
                        </div>
                        {/* <div className="swiper-wrappers">
                            <Swiper
                                ref={SlideRef}
                                modules={[Keyboard, Autoplay, Pagination]}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                            >
                                {ShowCaseV2Data.map(showcase =>
                                    <SwiperSlide key={showcase.id}>
                                        <SingleShowCaseV2 showcase={showcase} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div> */}
                        {/* <div className="case-swiper-nav">
                            <div className="swiper-pagination"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowCaseV2;