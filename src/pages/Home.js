import React from 'react';
import Countries from '../components/countries';
import Logo from '../components/logo';
import Navigation from '../components/navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;