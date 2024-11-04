import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectDetailsContent from '../../components/project/ProjectDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import ContentfulGraphQl from '../../components/services/ContentfulGraphQl';
import { singleProductQuery } from '../../gqlSchemas/products';
import { useLocale } from '../../components/services/LocaleContext';

const ProjectDetails = () => {

    const { id } = useParams();
    const {locale} = useLocale();
    const productData = ContentfulGraphQl(singleProductQuery(id, locale));

    if(!productData || !productData.products) {
        return false;
    }
    
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="project-details" title1={productData?.products?.name} bottomSpace="pb-0" />
            <ProjectDetailsContent projectInfo={productData?.products} />
            <FooterV1 />
        </>
    );
};

export default ProjectDetails;