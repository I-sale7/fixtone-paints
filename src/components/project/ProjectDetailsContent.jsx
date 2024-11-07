import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const ProjectDetailsContent = ({projectInfo }) => {
    const { banner, description } = projectInfo;

// Helper function to resolve asset from links
    const resolveAsset = (id, assets) => {
        return assets.find(asset => asset.sys.id === id);
    };
  
    const RICHTEXT_OPTIONS = (assets) => {
        return {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children)=> {
                    return <p className='smsm'>{children}</p>
                },
                [BLOCKS.EMBEDDED_ASSET]: (node)=> {
                    const assetId = node.data.target.sys.id; // Get the asset ID from the sys object
                    const asset = resolveAsset(assetId, assets.block); // Resolve the asset using the helper function
                    if (asset) {
                    const { url, title } = asset;
                    return (
                        <img
                        src={url}
                        alt={title || 'contentful-image'}
                        style={{ width: '48%', height: '400px', objectFit: 'cover', marginInlineEnd: '2%', marginBlockEnd: '2%'}}
                        />
                    );
                    }
    
                    return null;
                },
                
            }
        }
    }

    return (
        <>
            <div className="project-details-area pt-5">
                {banner ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-top-info">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="project-thumb">
                                                <img src={`${banner?.url}`} alt="Thumb" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : " "}
                <div className="container">
                    <div className="project-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className={`project-details mb-100 ${banner ? "mt-40" : ''}`}>
                                    {documentToReactComponents(description.json, RICHTEXT_OPTIONS(description.links.assets))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;