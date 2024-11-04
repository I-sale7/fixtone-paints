import React from 'react';
import Pagination from '../others/Pagination';
import BlogColumnData from '../../jsonData/BlogColumnData.json'
import SingleBlog3Column from './SingleBlog3Column';
import ContentfulGraphQl from '../services/ContentfulGraphQl';
import { productsQuery } from '../../gqlSchemas/products';
import { useLocale } from '../services/LocaleContext';

const Blog3ColumnContent = () => {

		const {locale} = useLocale();
    const products = ContentfulGraphQl(productsQuery(locale));

    if(!products) return;

    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {products?.productsCollection?.items?.map(product =>
                            <div className="col-lg-4 col-md-6 mb-50" key={product.sys.id}>
                                <SingleBlog3Column blog={product} />
                            </div>
                        )}
                    </div>
                    {/* <Pagination /> */}
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;