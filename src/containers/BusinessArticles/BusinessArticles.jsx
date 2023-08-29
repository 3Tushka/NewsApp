import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NewsItem from '../../components/NewsItem/NewsItem.jsx';
import Title from '../Title/Title.jsx';

const apiURL = "https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=7e85d3693b8c46e080ea666c2c0cdfe1";

const BusinessArticles = () => {

    const [BusinessArticles, setBusinessArticles] = useState([]);

    useEffect(() => {
        const getBusinnessArticles = async () => {
            const response = await axios.get(apiURL)
            setBusinessArticles(response.data.articles)
            console.log(response)
        };

        getBusinnessArticles();
    }, [])

    return (
        <>
            <div className="wrapper-70">
                <Title title={"Бізнес"} />
                <div className="articles">
                    {BusinessArticles.map((article, index) => {
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

export default BusinessArticles