import 'tailwindcss/tailwind.css';
import Calendar from './Calender';
import User from './Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Calendar />
            <User />
        </div>
    );
}

export default App;
