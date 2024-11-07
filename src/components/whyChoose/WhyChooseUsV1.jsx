import React from 'react';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { MISSION_AND_VISION_QUERY } from '../../gqlSchemas/homePage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useLocale } from '../services/LocaleContext';

const WhyChooseUsV1 = ({ chooseClass }) => {

    const {locale} = useLocale();
    const data = ContentfulGraphQl(MISSION_AND_VISION_QUERY(locale));

    if(!data) return;
    const missionVission = data?.ourVisionMission;
    return (
        <>
            <div className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 overflow-hidden">
                            <video style={{width: '100%', minHeight: '100%', objectFit: 'cover'}} controls autoPlay={true} muted>
                                <source src={missionVission.media.url} />
                            </video>
                        </div>
                        <div className="col-xl-6 ps-5 mt-md-50 mt-xs-40">
                            <div className="choose-us-card">
                                <h4 className="sub-title">{missionVission.title}</h4>
                                <h2 className="title">{missionVission.subTitle}</h2>
                                <div className='description'>
                                    {documentToReactComponents(missionVission.description.json)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV1;