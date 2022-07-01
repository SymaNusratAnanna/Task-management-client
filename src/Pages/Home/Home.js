import React from 'react';
import Banner from '../Shared/Banner';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import DailyTask from '../To-do/DailyTask';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DailyTask></DailyTask>
            
        </div>
    );
};

export default Home;