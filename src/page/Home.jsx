import React, { useState } from 'react';
import SideNav from '../Components/SideNav';
import Posts from '../Components/Posts';

const Home = () => {
    const [filter, setFilter] = useState('All')
    const [selectOption, setSelectOption] = useState('')
    return (
        <body>
            <section class="wrapper">
                <SideNav filter={filter} setFilter={setFilter} selectOption={selectOption} setSelectOption={setSelectOption} />
                <Posts filter={filter} selectOption={selectOption} />
            </section>
        </body>
    );
};

export default Home;