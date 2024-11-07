import React from 'react';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { aboutUsQuery } from '../../gqlSchemas/about';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useLocale } from '../services/LocaleContext';

const AboutV2 = () => {

    const {locale} = useLocale();

    let data = ContentfulGraphQl(aboutUsQuery(locale));

    let aboutData = data?.aboutPage;
    if(!data || !aboutData) return;

    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-two">
                            <div className="about-two-thumb">
                                <img src={aboutData.topMedia.url} alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>18</strong> Years Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
                            <div className="about-two-info">
                                <h4 className="sub-title">{aboutData.title}</h4>
                                {aboutData.subtitle ? <h2 className="title">{aboutData.subtitle}</h2> : ''}
                                <div className='description'>
                                    {documentToReactComponents(aboutData.description.json)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;