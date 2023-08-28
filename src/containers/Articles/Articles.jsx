import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NewsItem from '../../components/NewsItem/NewsItem.jsx';
import Title from '../Title/Title.jsx';

import './_articles.scss';

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=7e85d3693b8c46e080ea666c2c0cdfe1`)
            setArticles(response.data.articles)
            console.log(response)
        };

        getArticles();
    }, [])

    return (
        <>
            <div className="wrapper-70">
                <Title title={"Головні новини"} />
                <div className="articles">
                    {articles.map((article, index) => {
                        return (
                            <NewsItem key={index}
                                title={article.title}
                                url={article.url}
                                urlToImage={article.urlToImage}
                                publishedAt={article.publishedAt}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Articles