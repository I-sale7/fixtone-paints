import React from 'react';
import SingleTeamV2 from './SingleTeamV2';
import TeamV2Data from '../../jsonData/TeamV2Data.json'
import ReactWOW from 'react-wow';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { ourTeamsQuery } from '../../gqlSchemas/about';
import { useLocale } from '../services/LocaleContext';
import { useTranslation } from 'react-i18next';



const TeamV2 = ({ bgColor }) => {

    const {locale} = useLocale();
    const {t} = useTranslation();

    const response = ContentfulGraphQl(ourTeamsQuery(locale));

    if(!response) return;

    const data = response?.ourTeamsCollection?.items;

    return (
        <>
            <div className={`${bgColor ? bgColor : ""} team-style-two-area default-padding-top pb-70 pb-xs-0`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-12">
                            <div className="site-heading">
                                <h5 className="sub-title">{t("Team members")}</h5>
                                <h2 className="title">{t("Meet the Experts Behind Our Success")}</h2>
                            </div>
                        </div>
                        {data.slice(0, 5).map((team, index) =>
                            <ReactWOW key={index} animation={team.animationClass} delay={team.animationDelay}>
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
                                    <SingleTeamV2 team={team} />
                                </div>
                            </ReactWOW>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV2;