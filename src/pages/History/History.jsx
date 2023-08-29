import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import HistoryArticles from '../../containers/HistoryArticles/HistoryArticles'

export const History = () => {
    return (
        <>
            <Navbar />
            <HistoryArticles />
            <Footer />
        </>
    )
}