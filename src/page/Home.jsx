import React from 'react';
import SideNav from '../Components/SideNav';
import Posts from '../Components/Posts';

const Home = () => {
    return (
        <body>
            <section class="wrapper">
                <SideNav />
                <Posts />
            </section>
        </body>
    );
};

export default Home;