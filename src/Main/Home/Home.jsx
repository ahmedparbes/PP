import React from 'react';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Work from '../Work/Work';
import WorkTogether from '../WorkTogether/WorkTogether';
import './Home.css'

const Home = () => {
    return (
        <div className="all-all">
            <Header></Header>

            <HeaderBanner></HeaderBanner>
            <Work></Work>
            <WorkTogether></WorkTogether>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;