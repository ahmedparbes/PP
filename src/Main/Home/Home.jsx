import React from 'react';
import Experience from '../../Experience/Experience';
import Expertise from '../../Expertise/Expertise';
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
            <Expertise></Expertise>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;