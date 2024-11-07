import React from 'react';
import CountUp from 'react-countup';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { homeAboutComponentCollection } from '../../gqlSchemas/about';
import { useLocale } from '../services/LocaleContext';


const AboutV3 = () => {

    const { locale } = useLocale();

    let aboutData = ContentfulGraphQl(homeAboutComponentCollection(locale));

    if(aboutData ){
        const aboutUs = aboutData?.homeAboutComponentCollection?.items[0];
        return (
            <>
                <div className="about-style-three-area default-padding overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 about-style-three">
                                <div className="about-three-thumb">
                                    <img src={aboutUs.aboutImagesCollection.items[0].url} alt="Image Not Found" />
                                    {aboutUs.aboutImagesCollection.items[1]?.url ? 
                                        <img src={aboutUs.aboutImagesCollection.items[1]?.url} alt="Image Not Found" /> :
                                        ''
                                    }
                                    <div className="experience">
                                        <h2><strong><CountUp end={aboutUs.yearsOfExperience} duration={3} enableScrollSpy /></strong> Years Experience</h2>
                                    </div>
                                    <div className="animated-shape">
                                        <img src="/img/shape/38.png" alt="Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 about-style-three">
                                <div className="about-three-info">
                                    <h4 className="sub-title">{aboutUs.title}</h4>
                                    <h2 className="title">{aboutUs.bigTitle} </h2>
                                    <p>
                                        {aboutUs.description.json.content[0].content[0].value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutV3;