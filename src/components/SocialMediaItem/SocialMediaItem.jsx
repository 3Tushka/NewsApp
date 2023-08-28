/* eslint-disable react/prop-types */
import React from 'react'
import './_socialItem';

const SocialMediaItem = ({ title, image }) => {
    return (
        <>
            <div className="social-item">
                <div className="social-item__image">
                    <img src={image} alt="social-image" />
                </div>
                <div className="social-item__title">
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

export default SocialMediaItem