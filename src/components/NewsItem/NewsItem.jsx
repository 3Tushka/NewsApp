/* eslint-disable react/prop-types */
import React from 'react';
import './newsitem.scss';

const NewsItem = ({ title, url, urlToImage, publishedAt }) => {
    return (
        <div className="news">
            <a href={url} className='news-link'>
                <div className='news__item'>
                    <img className='news__img' src={urlToImage} alt={urlToImage} />
                    <div className="news__content">
                        <h3 className='news__content__h3'>
                            {title}
                        </h3>
                        <span className='news__content__time'>{publishedAt}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NewsItem