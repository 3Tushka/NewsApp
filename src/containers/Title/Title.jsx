/* eslint-disable react/prop-types */
import React from 'react';
import './_title.scss';

const Title = ({ title }) => {
    return (
        <div className="title">
            <div className="title__content">
                {title}
            </div>
        </div>
    )
}

export default Title