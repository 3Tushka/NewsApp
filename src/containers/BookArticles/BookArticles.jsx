import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NewsItem from '../../components/NewsItem/NewsItem.jsx';
import Title from '../Title/Title.jsx';

const apiURL = "https://newsapi.org/v2/everything?q=books&apiKey=7e85d3693b8c46e080ea666c2c0cdfe1";

const BookArticles = () => {

    const [BookArticles, setBookArticles] = useState([]);

    useEffect(() => {
        const getBookArticles = async () => {
            const response = await axios.get(apiURL)
            setBookArticles(response.data.articles)
            console.log(response)
        };

        getBookArticles();
    }, [])

    return (
        <>
            <div className="wrapper-70">
                <Title title={"Книги"} />
                <div className="articles">
                    {BookArticles.map((article, index) => {
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

export default BookArticles