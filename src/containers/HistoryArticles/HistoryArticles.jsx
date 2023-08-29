import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NewsItem from '../../components/NewsItem/NewsItem.jsx';
import Title from '../Title/Title.jsx';

const apiURL = "https://newsapi.org/v2/everything?domains=bbc.com&q=history&sortBy=popularity&apiKey=7e85d3693b8c46e080ea666c2c0cdfe1";

const HistoryArticles = () => {

    const [HistoryArticles, setHistoryArticles] = useState([]);

    useEffect(() => {
        const getHistoryArticles = async () => {
            const response = await axios.get(apiURL)
            setHistoryArticles(response.data.articles)
            console.log(response)
        };

        getHistoryArticles();
    }, [])

    return (
        <>
            <div className="wrapper-70">
                <Title title={"Історія"} />
                <div className="articles">
                    {HistoryArticles.map((article, index) => {
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

export default HistoryArticles