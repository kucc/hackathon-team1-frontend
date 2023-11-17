import React, { useState } from 'react';
import Calendar from '../Calender';
import Day from '../components/Day';
import useMemosStore from '../StoreMemos';
import AddTask from '../components/AddTask';

function Home() {
    return (
        <div className="flex ">
            <Calendar />
            <Day />
            <AddTask />
        </div>
    );
}

export default Home;
