import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import BookArticles from '../../containers/BookArticles/BookArticles'

export const Books = () => {
    return (
        <>
            <Navbar />
            <BookArticles />
            <Footer />
        </>
    )
}