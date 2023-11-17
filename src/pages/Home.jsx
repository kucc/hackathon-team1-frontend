import React, { useState } from 'react';
import Calendar from '../Calender';
import Day from '../components/Day';
import useMemosStore from '../StoreMemos';
import AddTask from '../components/AddTask';
import Gpt from '../components/Gpt';

function Home() {
    return (
        <div className="flex ">
            <Calendar />
            <Day />
            <div>
                <AddTask />
                <Gpt />
            </div>
        </div>
    );
}

export default Home;
