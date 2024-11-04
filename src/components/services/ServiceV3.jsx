import React from 'react';
import SingleServiceV3 from './SingleServiceV3';
import ContentfulGraphQl from './ContentfulGraphQl';
import { homeProductsQuery } from '../../gqlSchemas/products';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../services/LocaleContext';

const ServiceV3 = () => {
    const {locale} = useLocale();
    const products = ContentfulGraphQl(homeProductsQuery(locale));
    const {t} = useTranslation();

    if(!products) return;

    return (
        <>
            <div className="services-style-three-area bg-dark bg-cover default-padding bottom-less" style={{ backgroundImage: `url(/img/shape/banner-6.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t("Our Latest Products")}</h5>
                                <h2 className="title">{t("Discover What's New and Innovative")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {products?.productsCollection?.items?.map(product =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={product.id}>
                                <SingleServiceV3 service={{...product, btnLink: 'project-details', btnText: t('View Details') }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;