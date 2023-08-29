/* eslint-disable react/jsx-key */
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Popular from '../../containers/Popular/Popular.jsx'

import Articles from '../../containers/Articles/Articles.jsx';
import SocialMedia from '../../containers/SocialMedia/SocialMedia';

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <Articles />
            <SocialMedia />
            <Popular />
            <Footer />
        </>
    )
}
