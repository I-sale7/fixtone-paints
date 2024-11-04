import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { useTranslation } from 'react-i18next';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { contactQuery } from '../../gqlSchemas/contact';
import { useLocale } from '../services/LocaleContext';

const FooterV1 = () => {

    const {t} = useTranslation();
    const {locale} = useLocale();
    const response = ContentfulGraphQl(contactQuery(locale));
    
    if(!response) return;
    const data = response?.contactCollection?.items;

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: "url(/img/shape/5.png)" }}>
                <div className="container-full">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className={`f-item about ${locale === 'ar' ? "ps-5" : "pe-5"} pr-md-0 text-center`}>
                                    <img className="logo" src="/img/logo/f-logo-light.png" alt="Logo" />
                                    <p>
                                        {t("logo slogan")}
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">{t("Company")}</h4>
                                    <ul>
                                        <li>
                                            <Link to="/">{t("Home")}</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">{t("About")}</Link>
                                        </li>
                                        <li>
                                            <Link to="/our-products">{t("Products")}</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">{t("Contact")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">{t("Contact Info")}</h4>
                                    <ul>
                                        {data && data.map((contact, index)=> {
                                            return (<li key={index}>
                                                <div className="content">
                                                    <strong>{contact.title}:</strong>
                                                    {contact.description}
                                                </div>
                                            </li>)
                                        })}

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-dark text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} Fixtone Paints. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;