import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

import "./_popular.scss";

import PopularNewsItem from '../../components/PopularNewsItem/PopularNewsItem';
import Title from '../../containers/Title/Title';

const Popular = () => {

    const apiKey = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7e85d3693b8c46e080ea666c2c0cdfe1";

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const getPopular = async () => {
            const response = await axios.get(apiKey);
            setPopular(response.data.articles)
            console.log(response)
        };

        getPopular();
    }, [])

    return (
        <>
            <div className="wrapper-70">
                <Title title="Вибір BBC" />
                <div className="popular">
                    {popular.map((pop, index) => {
                        return (
                            <PopularNewsItem key={index}
                                author={pop.author}
                                url={pop.url}
                                title={pop.title}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Popular