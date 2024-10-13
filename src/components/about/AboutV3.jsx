import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json'
import CountUp from 'react-countup';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { homeAboutComponentCollection } from '../../gqlSchemas/about';


const AboutV3 = () => {

    let aboutData = ContentfulGraphQl(homeAboutComponentCollection);

    if(aboutData ){
        const aboutUs = aboutData.homeAboutComponentCollection.items[0];
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
                                    <ul className="list-grid-four">
                                        {AboutV3ListData.map(about =>
                                            <li key={about.id}>{about.item}</li>
                                        )}
                                    </ul>
                                    {aboutUs.authorName ? 
                                        (<div className="about-author">
                                            {aboutUs.authorImage ? (
                                                <div className="thumb">
                                                    <img src={aboutUs.authorImage.url || "/img/team/9.jpg"} style={{objectFit: 'cover'}} alt="Image Not Found" />
                                                </div>
                                            ) : ''}
                                            <div className="info">
                                                {aboutUs.authorName ? (
                                                    <h4>{aboutUs.authorName}</h4>
                                                ) : ''}
                                                {aboutUs.authorPosition ? (
                                                    <span>{aboutUs.authorPosition}</span>
                                                ) : ''}
                                            </div>
                                        </div>) :
                                        ''
                                    }
                                    
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