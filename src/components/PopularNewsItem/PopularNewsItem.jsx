/* eslint-disable react/prop-types */
import React from 'react'
import "./_popularNewsItem.scss";

const PopularNewsItem = ({ author, title, url }) => {

    const counterArray = [1, 2, 3, 4, 5, 6, 7, 8, 10];

    return (
        <>
            {/* {counterArray.map((count, index) =>
                <div className="count" key={index}>{count}</div>
            )} */}


            <div className="popular-box">
                <div className="popular-box__author">
                    {author}
                </div>
                <a href={url} className='popular-box__link'>
                    <div className="popular-box__title">
                        <span>
                            {title}
                        </span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default PopularNewsItem