import React from 'react';
import BannerV4 from '../../components/banner/BannerV4';
import AboutV3 from '../../components/about/AboutV3';
import ServiceV3 from '../../components/services/ServiceV3';
import ShowCaseV2 from '../../components/showCase/ShowCaseV2';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV4 from '../../components/header/HeaderV4';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';

const Business = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV4 logoColor={true} />
                <BannerV4 />
                <AboutV3 />
                <ServiceV3 />
                <WhyChooseUsV1 />
                {/* <ShowCaseV2 /> */}
                <FooterV1 />
            </div>
        </>
    );
};

export default Business;