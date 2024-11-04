import React from 'react';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { MISSION_AND_VISION_QUERY } from '../../gqlSchemas/homePage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useLocale } from '../services/LocaleContext';

const WhyChooseUsV2 = () => {
    
    const {locale} = useLocale();
    const response = ContentfulGraphQl(MISSION_AND_VISION_QUERY(locale));

    if(!response) return;
    const data = response?.ourVisionMission;

    return (
        <>
            <div className="choose-us-style-two-area default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 pe-5">
                            <div className="choose-us-style-two">
                                <h2 className="title mb-50">
                                    {data?.title}
                                </h2>
                                <div className='description'>
                                    {documentToReactComponents(data.description.json)}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 text-end">
                            <div className="choose-us-style-two-thumb">
                                <video style={{width: '100%', minHeight: '100%', objectFit: 'cover'}} controls autoPlay={true} muted>
                                    <source src={data?.media.url} />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV2;