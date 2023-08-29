/* eslint-disable react/prop-types */
import React from 'react'
import './_socialItem.scss';

const SocialMediaItem = ({ link, title, icon }) => {
    return (
        <>
            <a href={link} className="social-item">
                <div className="social-item__icon">
                    <i>
                        {icon}
                    </i>
                </div>
                <div className="social-item__title">
                    <span>{title}</span>
                </div>
            </a>
        </>
    )
}

export default SocialMediaItem