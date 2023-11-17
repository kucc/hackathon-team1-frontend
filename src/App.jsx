import 'tailwindcss/tailwind.css';
import Calendar from './Calender';
import User from './Users';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DayDate from './DayDate';
import Form from './Form';
import Memos from './Memos';
import useMemosStore from './StoreMemos';

function App() {
    const [memo, setMemo] = useState('');
    const [memos, setMemos] = useState([]);

    const handleWriteMemo = (e) => {
        setMemo(e.target.value);
    };

    const handleAddMemo = (e) => {
        e.preventDefault();
        setMemos((prevMemos) => [...prevMemos, memo]);
        setMemo('');
    };
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<DayDate />} />
                    <Route
                        path="/zustand"
                        element={
                            <div>
                                <h1>메모 작성하기</h1>
                                <Form
                                    onAdd={handleWriteMemo}
                                    onSubmit={handleAddMemo}
                                    memo={memo}
                                />
                                <Memos memos={memos} />
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
