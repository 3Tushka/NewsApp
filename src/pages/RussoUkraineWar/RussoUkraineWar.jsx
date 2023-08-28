import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

import Popular from '../../containers/Popular/Popular'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PopularNewsItem from '../../components/PopularNewsItem/PopularNewsItem';
import Articles from '../../containers/Articles/Articles';

export const RussoUkraineWar = () => {

    return (
        <>
            <Navbar />
            <Articles />
            <Popular />
            <Footer />
        </>
    )
}
