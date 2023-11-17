import 'tailwindcss/tailwind.css';
import Calendar from './Calender';
import User from './Users';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DayDate from './DayDate';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<DayDate />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
