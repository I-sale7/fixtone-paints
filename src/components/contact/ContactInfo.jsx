import React from 'react';
import SocialShare2 from '../others/SocialShare2';
import { useTranslation } from 'react-i18next';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { contactQuery } from '../../gqlSchemas/contact';
import { useLocale } from '../services/LocaleContext';

const ContactInfo = () => {
    const {t} = useTranslation();
    const {locale} = useLocale();
    
    const response = ContentfulGraphQl(contactQuery(locale));
    
    if(!response) return;
    const data = response?.contactCollection?.items;

    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-40">
                    <h2>{t("Contact Information")}</h2>
                    <p>
                        {t("Reach Out for More Information and Support")}
                    </p>
                </div>
                <ul className="contact-address">
                    

                {data && data.map((contact, index)=> {
                    return (
                    <li key={index} className="wow fadeInUp">
                        <div className="content">
                            <h4 className="title">{contact.title}</h4>
                            <p>{contact.description}</p>
                        </div>
                    </li>
                    )
                })}

                    <li className="wow fadeInUp" data-wow-delay="700ms">
                        <div className="info">
                            <h4 className="title">Follow Us</h4>
                            <ul className="social-link">
                                <SocialShare2 />
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;