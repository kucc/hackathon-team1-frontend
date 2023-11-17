import React, { useState } from 'react';
import Calendar from '../Calender';
import Day from '../components/Day';

function Home() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="flex">
            <Calendar onDateSelect={handleDateSelect} />
            {selectedDate && <Day Daydate={selectedDate} />}
        </div>
    );
}

export default Home;
