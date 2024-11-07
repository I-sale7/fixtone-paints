import React from 'react';

const SingleTeamV2 = ({ team }) => {
    const { title, position, image } = team

    return (
        <>
            <div className="team-style-two">
                <div className="thumb">
                    {image ? <img src={image.url} alt="Image Not Found" /> : ''}
                    <div className="team-info">
                        <div className="content">
                            <h4>{title}</h4>
                            <span>{position}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;