import React, { useState } from 'react';
import Calendar from '../Calender';
import Day from '../components/Day';
import useMemosStore from '../StoreMemos';

function Home() {
    return (
        <div className="flex">
            <Calendar />
            <Day />
        </div>
    );
}

export default Home;
