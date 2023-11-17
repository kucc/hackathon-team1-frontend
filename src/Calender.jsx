import { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css';

const Calendar = () => {
    return (
        <div class="rap">
            <div class="header">
                <div class="btn prevDay"></div>
                <h2 class="dateTitle"></h2>
                <div class="btn nextDay"></div>
            </div>

            <div class="grid dateHead">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>

            <div class="grid dateBoard"></div>
        </div>
    );
};

export default Calendar;
